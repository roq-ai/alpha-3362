import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { enrollmentValidationSchema } from 'validationSchema/enrollments';
import { StudentInterface } from 'interfaces/student';
import { CourseInterface } from 'interfaces/course';
import { EnrollmentInterface } from 'interfaces/enrollment';

function EnrollmentCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: EnrollmentInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.enrollment.create({ data: values as RoqTypes.enrollment });
      resetForm();
      router.push('/enrollments');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<EnrollmentInterface>({
    initialValues: {
      enrollment_date: new Date(new Date().toDateString()),
      completion_date: new Date(new Date().toDateString()),
      grade: 0,
      student_id: (router.query.student_id as string) ?? null,
      course_id: (router.query.course_id as string) ?? null,
    },
    validationSchema: enrollmentValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Enrollments',
              link: '/enrollments',
            },
            {
              label: 'Create Enrollment',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Enrollment
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="enrollment_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Enrollment Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.enrollment_date ? new Date(formik.values?.enrollment_date) : null}
              onChange={(value: Date) => formik.setFieldValue('enrollment_date', value)}
            />
          </FormControl>
          <FormControl id="completion_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Completion Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.completion_date ? new Date(formik.values?.completion_date) : null}
              onChange={(value: Date) => formik.setFieldValue('completion_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Grade"
            formControlProps={{
              id: 'grade',
              isInvalid: !!formik.errors?.grade,
            }}
            name="grade"
            error={formik.errors?.grade}
            value={formik.values?.grade}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('grade', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<StudentInterface>
            formik={formik}
            name={'student_id'}
            label={'Select Student'}
            placeholder={'Select Student'}
            fetcher={() => roqClient.student.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<CourseInterface>
            formik={formik}
            name={'course_id'}
            label={'Select Course'}
            placeholder={'Select Course'}
            fetcher={() => roqClient.course.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/enrollments')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'enrollment',
    operation: AccessOperationEnum.CREATE,
  }),
)(EnrollmentCreatePage);
