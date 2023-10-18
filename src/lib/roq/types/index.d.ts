/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model assignment
 *
 */
export type assignment = $Result.DefaultSelection<Prisma.$assignmentPayload>;
/**
 * Model course
 *
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>;
/**
 * Model enrollment
 *
 */
export type enrollment = $Result.DefaultSelection<Prisma.$enrollmentPayload>;
/**
 * Model student
 *
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>;
/**
 * Model teacher
 *
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assignments
 * const assignments = await prisma.assignment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **assignment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignment.findMany()
   * ```
   */
  get assignment(): Prisma.assignmentDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   */
  get course(): Prisma.courseDelegate<ExtArgs>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **enrollment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Enrollments
   * const enrollments = await prisma.enrollment.findMany()
   * ```
   */
  get enrollment(): Prisma.enrollmentDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   */
  get student(): Prisma.studentDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teachers
   * const teachers = await prisma.teacher.findMany()
   * ```
   */
  get teacher(): Prisma.teacherDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    assignment: 'assignment';
    course: 'course';
    enrollment: 'enrollment';
    student: 'student';
    teacher: 'teacher';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'assignment' | 'course' | 'enrollment' | 'student' | 'teacher' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      assignment: {
        payload: Prisma.$assignmentPayload<ExtArgs>;
        fields: Prisma.assignmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.assignmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.assignmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          findFirst: {
            args: Prisma.assignmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.assignmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          findMany: {
            args: Prisma.assignmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>[];
          };
          create: {
            args: Prisma.assignmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          createMany: {
            args: Prisma.assignmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.assignmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          update: {
            args: Prisma.assignmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          deleteMany: {
            args: Prisma.assignmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.assignmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.assignmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAssignment>;
          };
          groupBy: {
            args: Prisma.assignmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AssignmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.assignmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number;
          };
        };
      };
      course: {
        payload: Prisma.$coursePayload<ExtArgs>;
        fields: Prisma.courseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[];
          };
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourse>;
          };
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseGroupByOutputType>[];
          };
          count: {
            args: Prisma.courseCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseCountAggregateOutputType> | number;
          };
        };
      };
      enrollment: {
        payload: Prisma.$enrollmentPayload<ExtArgs>;
        fields: Prisma.enrollmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.enrollmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.enrollmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>;
          };
          findFirst: {
            args: Prisma.enrollmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.enrollmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>;
          };
          findMany: {
            args: Prisma.enrollmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>[];
          };
          create: {
            args: Prisma.enrollmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>;
          };
          createMany: {
            args: Prisma.enrollmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.enrollmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>;
          };
          update: {
            args: Prisma.enrollmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>;
          };
          deleteMany: {
            args: Prisma.enrollmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.enrollmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.enrollmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>;
          };
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEnrollment>;
          };
          groupBy: {
            args: Prisma.enrollmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EnrollmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.enrollmentCountArgs<ExtArgs>;
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number;
          };
        };
      };
      student: {
        payload: Prisma.$studentPayload<ExtArgs>;
        fields: Prisma.studentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[];
          };
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudent>;
          };
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudentGroupByOutputType>[];
          };
          count: {
            args: Prisma.studentCountArgs<ExtArgs>;
            result: $Utils.Optional<StudentCountAggregateOutputType> | number;
          };
        };
      };
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>;
        fields: Prisma.teacherFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[];
          };
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeacher>;
          };
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeacherGroupByOutputType>[];
          };
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>;
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    assignment: number;
    enrollment: number;
  };

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | CourseCountOutputTypeCountAssignmentArgs;
    enrollment?: boolean | CourseCountOutputTypeCountEnrollmentArgs;
  };

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountAssignmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: assignmentWhereInput;
  };

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: enrollmentWhereInput;
  };

  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    assignment: number;
    enrollment: number;
  };

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | StudentCountOutputTypeCountAssignmentArgs;
    enrollment?: boolean | StudentCountOutputTypeCountEnrollmentArgs;
  };

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAssignmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: assignmentWhereInput;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: enrollmentWhereInput;
  };

  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    course: number;
  };

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | TeacherCountOutputTypeCountCourseArgs;
  };

  // Custom InputTypes

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountCourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: courseWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    student: number;
    teacher: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserCountOutputTypeCountStudentArgs;
    teacher?: boolean | UserCountOutputTypeCountTeacherArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: studentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: teacherWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null;
    _avg: AssignmentAvgAggregateOutputType | null;
    _sum: AssignmentSumAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
  };

  export type AssignmentAvgAggregateOutputType = {
    grade: number | null;
  };

  export type AssignmentSumAggregateOutputType = {
    grade: number | null;
  };

  export type AssignmentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    due_date: Date | null;
    course_id: string | null;
    student_id: string | null;
    grade: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AssignmentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    due_date: Date | null;
    course_id: string | null;
    student_id: string | null;
    grade: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AssignmentCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    due_date: number;
    course_id: number;
    student_id: number;
    grade: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AssignmentAvgAggregateInputType = {
    grade?: true;
  };

  export type AssignmentSumAggregateInputType = {
    grade?: true;
  };

  export type AssignmentMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    due_date?: true;
    course_id?: true;
    student_id?: true;
    grade?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AssignmentMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    due_date?: true;
    course_id?: true;
    student_id?: true;
    grade?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AssignmentCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    due_date?: true;
    course_id?: true;
    student_id?: true;
    grade?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignment to aggregate.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned assignments
     **/
    _count?: true | AssignmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AssignmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AssignmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AssignmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AssignmentMaxAggregateInputType;
  };

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>;
  };

  export type assignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput;
    orderBy?: assignmentOrderByWithAggregationInput | assignmentOrderByWithAggregationInput[];
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum;
    having?: assignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssignmentCountAggregateInputType | true;
    _avg?: AssignmentAvgAggregateInputType;
    _sum?: AssignmentSumAggregateInputType;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
  };

  export type AssignmentGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    due_date: Date | null;
    course_id: string;
    student_id: string;
    grade: number | null;
    created_at: Date;
    updated_at: Date;
    _count: AssignmentCountAggregateOutputType | null;
    _avg: AssignmentAvgAggregateOutputType | null;
    _sum: AssignmentSumAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
  };

  type GetAssignmentGroupByPayload<T extends assignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AssignmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
          : GetScalarType<T[P], AssignmentGroupByOutputType[P]>;
      }
    >
  >;

  export type assignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        due_date?: boolean;
        course_id?: boolean;
        student_id?: boolean;
        grade?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        course?: boolean | courseDefaultArgs<ExtArgs>;
        student?: boolean | studentDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['assignment']
    >;

  export type assignmentSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    due_date?: boolean;
    course_id?: boolean;
    student_id?: boolean;
    grade?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type assignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>;
    student?: boolean | studentDefaultArgs<ExtArgs>;
  };

  export type $assignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'assignment';
    objects: {
      course: Prisma.$coursePayload<ExtArgs>;
      student: Prisma.$studentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        due_date: Date | null;
        course_id: string;
        student_id: string;
        grade: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['assignment']
    >;
    composites: {};
  };

  type assignmentGetPayload<S extends boolean | null | undefined | assignmentDefaultArgs> = $Result.GetResult<
    Prisma.$assignmentPayload,
    S
  >;

  type assignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    assignmentFindManyArgs,
    'select' | 'include'
  > & {
    select?: AssignmentCountAggregateInputType | true;
  };

  export interface assignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignment']; meta: { name: 'assignment' } };
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {assignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends assignmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Assignment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {assignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends assignmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends assignmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindFirstArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends assignmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     *
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends assignmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Assignment.
     * @param {assignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     *
     **/
    create<T extends assignmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentCreateArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Assignments.
     *     @param {assignmentCreateManyArgs} args - Arguments to create many Assignments.
     *     @example
     *     // Create many Assignments
     *     const assignment = await prisma.assignment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends assignmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Assignment.
     * @param {assignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     *
     **/
    delete<T extends assignmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentDeleteArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Assignment.
     * @param {assignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends assignmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentUpdateArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Assignments.
     * @param {assignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends assignmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends assignmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Assignment.
     * @param {assignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     **/
    upsert<T extends assignmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentUpsertArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
     **/
    count<T extends assignmentCountArgs>(
      args?: Subset<T, assignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AssignmentAggregateArgs>(
      args: Subset<T, AssignmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>;

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends assignmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignmentGroupByArgs['orderBy'] }
        : { orderBy?: assignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, assignmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the assignment model
     */
    readonly fields: assignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends courseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, courseDefaultArgs<ExtArgs>>,
    ): Prisma__courseClient<
      $Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    student<T extends studentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, studentDefaultArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the assignment model
   */
  interface assignmentFieldRefs {
    readonly id: FieldRef<'assignment', 'String'>;
    readonly name: FieldRef<'assignment', 'String'>;
    readonly description: FieldRef<'assignment', 'String'>;
    readonly due_date: FieldRef<'assignment', 'DateTime'>;
    readonly course_id: FieldRef<'assignment', 'String'>;
    readonly student_id: FieldRef<'assignment', 'String'>;
    readonly grade: FieldRef<'assignment', 'Int'>;
    readonly created_at: FieldRef<'assignment', 'DateTime'>;
    readonly updated_at: FieldRef<'assignment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * assignment findUnique
   */
  export type assignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment findUniqueOrThrow
   */
  export type assignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment findFirst
   */
  export type assignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * assignment findFirstOrThrow
   */
  export type assignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * assignment findMany
   */
  export type assignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing assignments.
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * assignment create
   */
  export type assignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a assignment.
     */
    data: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>;
  };

  /**
   * assignment createMany
   */
  export type assignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignments.
     */
    data: assignmentCreateManyInput | assignmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * assignment update
   */
  export type assignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a assignment.
     */
    data: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>;
    /**
     * Choose, which assignment to update.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment updateMany
   */
  export type assignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyInput>;
    /**
     * Filter which assignments to update
     */
    where?: assignmentWhereInput;
  };

  /**
   * assignment upsert
   */
  export type assignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the assignment to update in case it exists.
     */
    where: assignmentWhereUniqueInput;
    /**
     * In case the assignment found by the `where` argument doesn't exist, create a new assignment with this data.
     */
    create: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>;
    /**
     * In case the assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>;
  };

  /**
   * assignment delete
   */
  export type assignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter which assignment to delete.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment deleteMany
   */
  export type assignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignments to delete
     */
    where?: assignmentWhereInput;
  };

  /**
   * assignment without action
   */
  export type assignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
  };

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  export type CourseMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    teacher_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    teacher_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    teacher_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CourseMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    teacher_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    teacher_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    teacher_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned courses
     **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseMaxAggregateInputType;
  };

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>;
  };

  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput;
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[];
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum;
    having?: courseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
  };

  export type CourseGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    teacher_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CourseCountAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CourseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
          : GetScalarType<T[P], CourseGroupByOutputType[P]>;
      }
    >
  >;

  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      teacher_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      assignment?: boolean | course$assignmentArgs<ExtArgs>;
      teacher?: boolean | teacherDefaultArgs<ExtArgs>;
      enrollment?: boolean | course$enrollmentArgs<ExtArgs>;
      _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['course']
  >;

  export type courseSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    teacher_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | course$assignmentArgs<ExtArgs>;
    teacher?: boolean | teacherDefaultArgs<ExtArgs>;
    enrollment?: boolean | course$enrollmentArgs<ExtArgs>;
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'course';
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>[];
      teacher: Prisma.$teacherPayload<ExtArgs>;
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        start_date: Date | null;
        end_date: Date | null;
        teacher_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['course']
    >;
    composites: {};
  };

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<
    Prisma.$coursePayload,
    S
  >;

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    courseFindManyArgs,
    'select' | 'include'
  > & {
    select?: CourseCountAggregateInputType | true;
  };

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course']; meta: { name: 'course' } };
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends courseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends courseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends courseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     **/
    create<T extends courseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, courseCreateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Courses.
     *     @param {courseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends courseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     **/
    delete<T extends courseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, courseDeleteArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends courseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends courseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends courseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     **/
    upsert<T extends courseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpsertArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
     **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CourseAggregateArgs>(
      args: Subset<T, CourseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseAggregateType<T>>;

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the course model
     */
    readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignment<T extends course$assignmentArgs<ExtArgs> = {}>(
      args?: Subset<T, course$assignmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, teacherDefaultArgs<ExtArgs>>,
    ): Prisma__teacherClient<
      $Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    enrollment<T extends course$enrollmentArgs<ExtArgs> = {}>(
      args?: Subset<T, course$enrollmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<'course', 'String'>;
    readonly name: FieldRef<'course', 'String'>;
    readonly description: FieldRef<'course', 'String'>;
    readonly start_date: FieldRef<'course', 'DateTime'>;
    readonly end_date: FieldRef<'course', 'DateTime'>;
    readonly teacher_id: FieldRef<'course', 'String'>;
    readonly created_at: FieldRef<'course', 'DateTime'>;
    readonly updated_at: FieldRef<'course', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>;
  };

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>;
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput;
  };

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput;
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>;
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
  };

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput;
  };

  /**
   * course.assignment
   */
  export type course$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    where?: assignmentWhereInput;
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    cursor?: assignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * course.enrollment
   */
  export type course$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    where?: enrollmentWhereInput;
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[];
    cursor?: enrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[];
  };

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
  };

  /**
   * Model enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null;
    _avg: EnrollmentAvgAggregateOutputType | null;
    _sum: EnrollmentSumAggregateOutputType | null;
    _min: EnrollmentMinAggregateOutputType | null;
    _max: EnrollmentMaxAggregateOutputType | null;
  };

  export type EnrollmentAvgAggregateOutputType = {
    grade: number | null;
  };

  export type EnrollmentSumAggregateOutputType = {
    grade: number | null;
  };

  export type EnrollmentMinAggregateOutputType = {
    id: string | null;
    student_id: string | null;
    course_id: string | null;
    enrollment_date: Date | null;
    completion_date: Date | null;
    grade: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null;
    student_id: string | null;
    course_id: string | null;
    enrollment_date: Date | null;
    completion_date: Date | null;
    grade: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EnrollmentCountAggregateOutputType = {
    id: number;
    student_id: number;
    course_id: number;
    enrollment_date: number;
    completion_date: number;
    grade: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EnrollmentAvgAggregateInputType = {
    grade?: true;
  };

  export type EnrollmentSumAggregateInputType = {
    grade?: true;
  };

  export type EnrollmentMinAggregateInputType = {
    id?: true;
    student_id?: true;
    course_id?: true;
    enrollment_date?: true;
    completion_date?: true;
    grade?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EnrollmentMaxAggregateInputType = {
    id?: true;
    student_id?: true;
    course_id?: true;
    enrollment_date?: true;
    completion_date?: true;
    grade?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EnrollmentCountAggregateInputType = {
    id?: true;
    student_id?: true;
    course_id?: true;
    enrollment_date?: true;
    completion_date?: true;
    grade?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollment to aggregate.
     */
    where?: enrollmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: enrollmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` enrollments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned enrollments
     **/
    _count?: true | EnrollmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EnrollmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EnrollmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EnrollmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EnrollmentMaxAggregateInputType;
  };

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
    [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>;
  };

  export type enrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput;
    orderBy?: enrollmentOrderByWithAggregationInput | enrollmentOrderByWithAggregationInput[];
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum;
    having?: enrollmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnrollmentCountAggregateInputType | true;
    _avg?: EnrollmentAvgAggregateInputType;
    _sum?: EnrollmentSumAggregateInputType;
    _min?: EnrollmentMinAggregateInputType;
    _max?: EnrollmentMaxAggregateInputType;
  };

  export type EnrollmentGroupByOutputType = {
    id: string;
    student_id: string;
    course_id: string;
    enrollment_date: Date | null;
    completion_date: Date | null;
    grade: number | null;
    created_at: Date;
    updated_at: Date;
    _count: EnrollmentCountAggregateOutputType | null;
    _avg: EnrollmentAvgAggregateOutputType | null;
    _sum: EnrollmentSumAggregateOutputType | null;
    _min: EnrollmentMinAggregateOutputType | null;
    _max: EnrollmentMaxAggregateOutputType | null;
  };

  type GetEnrollmentGroupByPayload<T extends enrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EnrollmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
          : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>;
      }
    >
  >;

  export type enrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        student_id?: boolean;
        course_id?: boolean;
        enrollment_date?: boolean;
        completion_date?: boolean;
        grade?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        course?: boolean | courseDefaultArgs<ExtArgs>;
        student?: boolean | studentDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['enrollment']
    >;

  export type enrollmentSelectScalar = {
    id?: boolean;
    student_id?: boolean;
    course_id?: boolean;
    enrollment_date?: boolean;
    completion_date?: boolean;
    grade?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type enrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>;
    student?: boolean | studentDefaultArgs<ExtArgs>;
  };

  export type $enrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'enrollment';
    objects: {
      course: Prisma.$coursePayload<ExtArgs>;
      student: Prisma.$studentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        student_id: string;
        course_id: string;
        enrollment_date: Date | null;
        completion_date: Date | null;
        grade: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['enrollment']
    >;
    composites: {};
  };

  type enrollmentGetPayload<S extends boolean | null | undefined | enrollmentDefaultArgs> = $Result.GetResult<
    Prisma.$enrollmentPayload,
    S
  >;

  type enrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    enrollmentFindManyArgs,
    'select' | 'include'
  > & {
    select?: EnrollmentCountAggregateInputType | true;
  };

  export interface enrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollment']; meta: { name: 'enrollment' } };
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {enrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends enrollmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, enrollmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<
      $Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Enrollment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {enrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends enrollmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<
      $Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends enrollmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollmentFindFirstArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<
      $Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends enrollmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<
      $Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     *
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends enrollmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Enrollment.
     * @param {enrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     *
     **/
    create<T extends enrollmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, enrollmentCreateArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Enrollments.
     *     @param {enrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     *     @example
     *     // Create many Enrollments
     *     const enrollment = await prisma.enrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends enrollmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Enrollment.
     * @param {enrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     *
     **/
    delete<T extends enrollmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, enrollmentDeleteArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Enrollment.
     * @param {enrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends enrollmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, enrollmentUpdateArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends enrollmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enrollmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends enrollmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, enrollmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Enrollment.
     * @param {enrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     **/
    upsert<T extends enrollmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, enrollmentUpsertArgs<ExtArgs>>,
    ): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
     **/
    count<T extends enrollmentCountArgs>(
      args?: Subset<T, enrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EnrollmentAggregateArgs>(
      args: Subset<T, EnrollmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>;

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends enrollmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, enrollmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the enrollment model
     */
    readonly fields: enrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends courseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, courseDefaultArgs<ExtArgs>>,
    ): Prisma__courseClient<
      $Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    student<T extends studentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, studentDefaultArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the enrollment model
   */
  interface enrollmentFieldRefs {
    readonly id: FieldRef<'enrollment', 'String'>;
    readonly student_id: FieldRef<'enrollment', 'String'>;
    readonly course_id: FieldRef<'enrollment', 'String'>;
    readonly enrollment_date: FieldRef<'enrollment', 'DateTime'>;
    readonly completion_date: FieldRef<'enrollment', 'DateTime'>;
    readonly grade: FieldRef<'enrollment', 'Int'>;
    readonly created_at: FieldRef<'enrollment', 'DateTime'>;
    readonly updated_at: FieldRef<'enrollment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * enrollment findUnique
   */
  export type enrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput;
  };

  /**
   * enrollment findUniqueOrThrow
   */
  export type enrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput;
  };

  /**
   * enrollment findFirst
   */
  export type enrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` enrollments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[];
  };

  /**
   * enrollment findFirstOrThrow
   */
  export type enrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` enrollments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[];
  };

  /**
   * enrollment findMany
   */
  export type enrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` enrollments.
     */
    skip?: number;
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[];
  };

  /**
   * enrollment create
   */
  export type enrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a enrollment.
     */
    data: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>;
  };

  /**
   * enrollment createMany
   */
  export type enrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentCreateManyInput | enrollmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * enrollment update
   */
  export type enrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a enrollment.
     */
    data: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>;
    /**
     * Choose, which enrollment to update.
     */
    where: enrollmentWhereUniqueInput;
  };

  /**
   * enrollment updateMany
   */
  export type enrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyInput>;
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentWhereInput;
  };

  /**
   * enrollment upsert
   */
  export type enrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the enrollment to update in case it exists.
     */
    where: enrollmentWhereUniqueInput;
    /**
     * In case the enrollment found by the `where` argument doesn't exist, create a new enrollment with this data.
     */
    create: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>;
    /**
     * In case the enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>;
  };

  /**
   * enrollment delete
   */
  export type enrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    /**
     * Filter which enrollment to delete.
     */
    where: enrollmentWhereUniqueInput;
  };

  /**
   * enrollment deleteMany
   */
  export type enrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentWhereInput;
  };

  /**
   * enrollment without action
   */
  export type enrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
  };

  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  export type StudentAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type StudentSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type StudentMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    grade_level: number | null;
    enrollment_date: Date | null;
    graduation_date: Date | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type StudentMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    grade_level: number | null;
    enrollment_date: Date | null;
    graduation_date: Date | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type StudentCountAggregateOutputType = {
    id: number;
    description: number;
    grade_level: number;
    enrollment_date: number;
    graduation_date: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type StudentAvgAggregateInputType = {
    grade_level?: true;
  };

  export type StudentSumAggregateInputType = {
    grade_level?: true;
  };

  export type StudentMinAggregateInputType = {
    id?: true;
    description?: true;
    grade_level?: true;
    enrollment_date?: true;
    graduation_date?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type StudentMaxAggregateInputType = {
    id?: true;
    description?: true;
    grade_level?: true;
    enrollment_date?: true;
    graduation_date?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type StudentCountAggregateInputType = {
    id?: true;
    description?: true;
    grade_level?: true;
    enrollment_date?: true;
    graduation_date?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned students
     **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StudentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StudentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudentMaxAggregateInputType;
  };

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>;
  };

  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput;
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[];
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum;
    having?: studentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
  };

  export type StudentGroupByOutputType = {
    id: string;
    description: string | null;
    grade_level: number | null;
    enrollment_date: Date | null;
    graduation_date: Date | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StudentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
          : GetScalarType<T[P], StudentGroupByOutputType[P]>;
      }
    >
  >;

  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      grade_level?: boolean;
      enrollment_date?: boolean;
      graduation_date?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      assignment?: boolean | student$assignmentArgs<ExtArgs>;
      enrollment?: boolean | student$enrollmentArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['student']
  >;

  export type studentSelectScalar = {
    id?: boolean;
    description?: boolean;
    grade_level?: boolean;
    enrollment_date?: boolean;
    graduation_date?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | student$assignmentArgs<ExtArgs>;
    enrollment?: boolean | student$enrollmentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'student';
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>[];
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        grade_level: number | null;
        enrollment_date: Date | null;
        graduation_date: Date | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['student']
    >;
    composites: {};
  };

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<
    Prisma.$studentPayload,
    S
  >;

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    studentFindManyArgs,
    'select' | 'include'
  > & {
    select?: StudentCountAggregateInputType | true;
  };

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student']; meta: { name: 'student' } };
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends studentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends studentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends studentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     **/
    create<T extends studentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentCreateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Students.
     *     @param {studentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends studentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     **/
    delete<T extends studentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentDeleteArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends studentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends studentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends studentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     **/
    upsert<T extends studentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpsertArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
     **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StudentAggregateArgs>(
      args: Subset<T, StudentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudentAggregateType<T>>;

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the student model
     */
    readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignment<T extends student$assignmentArgs<ExtArgs> = {}>(
      args?: Subset<T, student$assignmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    enrollment<T extends student$enrollmentArgs<ExtArgs> = {}>(
      args?: Subset<T, student$enrollmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<'student', 'String'>;
    readonly description: FieldRef<'student', 'String'>;
    readonly grade_level: FieldRef<'student', 'Int'>;
    readonly enrollment_date: FieldRef<'student', 'DateTime'>;
    readonly graduation_date: FieldRef<'student', 'DateTime'>;
    readonly name: FieldRef<'student', 'String'>;
    readonly created_at: FieldRef<'student', 'DateTime'>;
    readonly updated_at: FieldRef<'student', 'DateTime'>;
    readonly user_id: FieldRef<'student', 'String'>;
    readonly tenant_id: FieldRef<'student', 'String'>;
  }

  // Custom InputTypes

  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>;
  };

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: studentWhereInput;
  };

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput;
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>;
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
  };

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput;
  };

  /**
   * student.assignment
   */
  export type student$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    where?: assignmentWhereInput;
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    cursor?: assignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * student.enrollment
   */
  export type student$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: enrollmentInclude<ExtArgs> | null;
    where?: enrollmentWhereInput;
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[];
    cursor?: enrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[];
  };

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
  };

  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  export type TeacherMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    subject: string | null;
    hire_date: Date | null;
    termination_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    subject: string | null;
    hire_date: Date | null;
    termination_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherCountAggregateOutputType = {
    id: number;
    name: number;
    subject: number;
    hire_date: number;
    termination_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeacherMinAggregateInputType = {
    id?: true;
    name?: true;
    subject?: true;
    hire_date?: true;
    termination_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherMaxAggregateInputType = {
    id?: true;
    name?: true;
    subject?: true;
    hire_date?: true;
    termination_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherCountAggregateInputType = {
    id?: true;
    name?: true;
    subject?: true;
    hire_date?: true;
    termination_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teachers
     **/
    _count?: true | TeacherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeacherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeacherMaxAggregateInputType;
  };

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>;
  };

  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[];
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum;
    having?: teacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherCountAggregateInputType | true;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
  };

  export type TeacherGroupByOutputType = {
    id: string;
    name: string;
    subject: string | null;
    hire_date: Date | null;
    termination_date: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeacherGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
          : GetScalarType<T[P], TeacherGroupByOutputType[P]>;
      }
    >
  >;

  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      subject?: boolean;
      hire_date?: boolean;
      termination_date?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      course?: boolean | teacher$courseArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teacher']
  >;

  export type teacherSelectScalar = {
    id?: boolean;
    name?: boolean;
    subject?: boolean;
    hire_date?: boolean;
    termination_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | teacher$courseArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'teacher';
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        subject: string | null;
        hire_date: Date | null;
        termination_date: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['teacher']
    >;
    composites: {};
  };

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<
    Prisma.$teacherPayload,
    S
  >;

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teacherFindManyArgs,
    'select' | 'include'
  > & {
    select?: TeacherCountAggregateInputType | true;
  };

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher']; meta: { name: 'teacher' } };
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teacherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<
      $Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teacherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     *
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teacherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     *
     **/
    create<T extends teacherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherCreateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teachers.
     *     @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teacherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     *
     **/
    delete<T extends teacherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teacherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teacherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teacherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     **/
    upsert<T extends teacherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
     **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeacherAggregateArgs>(
      args: Subset<T, TeacherAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeacherAggregateType<T>>;

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the teacher model
     */
    readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends teacher$courseArgs<ExtArgs> = {}>(
      args?: Subset<T, teacher$courseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly id: FieldRef<'teacher', 'String'>;
    readonly name: FieldRef<'teacher', 'String'>;
    readonly subject: FieldRef<'teacher', 'String'>;
    readonly hire_date: FieldRef<'teacher', 'DateTime'>;
    readonly termination_date: FieldRef<'teacher', 'DateTime'>;
    readonly user_id: FieldRef<'teacher', 'String'>;
    readonly created_at: FieldRef<'teacher', 'DateTime'>;
    readonly updated_at: FieldRef<'teacher', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
  };

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>;
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput;
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
  };

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher.course
   */
  export type teacher$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    where?: courseWhereInput;
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    cursor?: courseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      student?: boolean | user$studentArgs<ExtArgs>;
      teacher?: boolean | user$teacherArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | user$studentArgs<ExtArgs>;
    teacher?: boolean | user$teacherArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      student: Prisma.$studentPayload<ExtArgs>[];
      teacher: Prisma.$teacherPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends user$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends user$teacherArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teacherArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.student
   */
  export type user$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * user.teacher
   */
  export type user$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    cursor?: teacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AssignmentScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    due_date: 'due_date';
    course_id: 'course_id';
    student_id: 'student_id';
    grade: 'grade';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum];

  export const CourseScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    teacher_id: 'teacher_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

  export const EnrollmentScalarFieldEnum: {
    id: 'id';
    student_id: 'student_id';
    course_id: 'course_id';
    enrollment_date: 'enrollment_date';
    completion_date: 'completion_date';
    grade: 'grade';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];

  export const StudentScalarFieldEnum: {
    id: 'id';
    description: 'description';
    grade_level: 'grade_level';
    enrollment_date: 'enrollment_date';
    graduation_date: 'graduation_date';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];

  export const TeacherScalarFieldEnum: {
    id: 'id';
    name: 'name';
    subject: 'subject';
    hire_date: 'hire_date';
    termination_date: 'termination_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type assignmentWhereInput = {
    AND?: assignmentWhereInput | assignmentWhereInput[];
    OR?: assignmentWhereInput[];
    NOT?: assignmentWhereInput | assignmentWhereInput[];
    id?: UuidFilter<'assignment'> | string;
    name?: StringFilter<'assignment'> | string;
    description?: StringNullableFilter<'assignment'> | string | null;
    due_date?: DateTimeNullableFilter<'assignment'> | Date | string | null;
    course_id?: UuidFilter<'assignment'> | string;
    student_id?: UuidFilter<'assignment'> | string;
    grade?: IntNullableFilter<'assignment'> | number | null;
    created_at?: DateTimeFilter<'assignment'> | Date | string;
    updated_at?: DateTimeFilter<'assignment'> | Date | string;
    course?: XOR<CourseRelationFilter, courseWhereInput>;
    student?: XOR<StudentRelationFilter, studentWhereInput>;
  };

  export type assignmentOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    due_date?: SortOrderInput | SortOrder;
    course_id?: SortOrder;
    student_id?: SortOrder;
    grade?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    course?: courseOrderByWithRelationInput;
    student?: studentOrderByWithRelationInput;
  };

  export type assignmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: assignmentWhereInput | assignmentWhereInput[];
      OR?: assignmentWhereInput[];
      NOT?: assignmentWhereInput | assignmentWhereInput[];
      name?: StringFilter<'assignment'> | string;
      description?: StringNullableFilter<'assignment'> | string | null;
      due_date?: DateTimeNullableFilter<'assignment'> | Date | string | null;
      course_id?: UuidFilter<'assignment'> | string;
      student_id?: UuidFilter<'assignment'> | string;
      grade?: IntNullableFilter<'assignment'> | number | null;
      created_at?: DateTimeFilter<'assignment'> | Date | string;
      updated_at?: DateTimeFilter<'assignment'> | Date | string;
      course?: XOR<CourseRelationFilter, courseWhereInput>;
      student?: XOR<StudentRelationFilter, studentWhereInput>;
    },
    'id'
  >;

  export type assignmentOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    due_date?: SortOrderInput | SortOrder;
    course_id?: SortOrder;
    student_id?: SortOrder;
    grade?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: assignmentCountOrderByAggregateInput;
    _avg?: assignmentAvgOrderByAggregateInput;
    _max?: assignmentMaxOrderByAggregateInput;
    _min?: assignmentMinOrderByAggregateInput;
    _sum?: assignmentSumOrderByAggregateInput;
  };

  export type assignmentScalarWhereWithAggregatesInput = {
    AND?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[];
    OR?: assignmentScalarWhereWithAggregatesInput[];
    NOT?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'assignment'> | string;
    name?: StringWithAggregatesFilter<'assignment'> | string;
    description?: StringNullableWithAggregatesFilter<'assignment'> | string | null;
    due_date?: DateTimeNullableWithAggregatesFilter<'assignment'> | Date | string | null;
    course_id?: UuidWithAggregatesFilter<'assignment'> | string;
    student_id?: UuidWithAggregatesFilter<'assignment'> | string;
    grade?: IntNullableWithAggregatesFilter<'assignment'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'assignment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'assignment'> | Date | string;
  };

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[];
    OR?: courseWhereInput[];
    NOT?: courseWhereInput | courseWhereInput[];
    id?: UuidFilter<'course'> | string;
    name?: StringFilter<'course'> | string;
    description?: StringNullableFilter<'course'> | string | null;
    start_date?: DateTimeNullableFilter<'course'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'course'> | Date | string | null;
    teacher_id?: UuidFilter<'course'> | string;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
    assignment?: AssignmentListRelationFilter;
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>;
    enrollment?: EnrollmentListRelationFilter;
  };

  export type courseOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    teacher_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    assignment?: assignmentOrderByRelationAggregateInput;
    teacher?: teacherOrderByWithRelationInput;
    enrollment?: enrollmentOrderByRelationAggregateInput;
  };

  export type courseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: courseWhereInput | courseWhereInput[];
      OR?: courseWhereInput[];
      NOT?: courseWhereInput | courseWhereInput[];
      name?: StringFilter<'course'> | string;
      description?: StringNullableFilter<'course'> | string | null;
      start_date?: DateTimeNullableFilter<'course'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'course'> | Date | string | null;
      teacher_id?: UuidFilter<'course'> | string;
      created_at?: DateTimeFilter<'course'> | Date | string;
      updated_at?: DateTimeFilter<'course'> | Date | string;
      assignment?: AssignmentListRelationFilter;
      teacher?: XOR<TeacherRelationFilter, teacherWhereInput>;
      enrollment?: EnrollmentListRelationFilter;
    },
    'id'
  >;

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    teacher_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: courseCountOrderByAggregateInput;
    _max?: courseMaxOrderByAggregateInput;
    _min?: courseMinOrderByAggregateInput;
  };

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    OR?: courseScalarWhereWithAggregatesInput[];
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'course'> | string;
    name?: StringWithAggregatesFilter<'course'> | string;
    description?: StringNullableWithAggregatesFilter<'course'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'course'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'course'> | Date | string | null;
    teacher_id?: UuidWithAggregatesFilter<'course'> | string;
    created_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
  };

  export type enrollmentWhereInput = {
    AND?: enrollmentWhereInput | enrollmentWhereInput[];
    OR?: enrollmentWhereInput[];
    NOT?: enrollmentWhereInput | enrollmentWhereInput[];
    id?: UuidFilter<'enrollment'> | string;
    student_id?: UuidFilter<'enrollment'> | string;
    course_id?: UuidFilter<'enrollment'> | string;
    enrollment_date?: DateTimeNullableFilter<'enrollment'> | Date | string | null;
    completion_date?: DateTimeNullableFilter<'enrollment'> | Date | string | null;
    grade?: IntNullableFilter<'enrollment'> | number | null;
    created_at?: DateTimeFilter<'enrollment'> | Date | string;
    updated_at?: DateTimeFilter<'enrollment'> | Date | string;
    course?: XOR<CourseRelationFilter, courseWhereInput>;
    student?: XOR<StudentRelationFilter, studentWhereInput>;
  };

  export type enrollmentOrderByWithRelationInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    course_id?: SortOrder;
    enrollment_date?: SortOrderInput | SortOrder;
    completion_date?: SortOrderInput | SortOrder;
    grade?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    course?: courseOrderByWithRelationInput;
    student?: studentOrderByWithRelationInput;
  };

  export type enrollmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: enrollmentWhereInput | enrollmentWhereInput[];
      OR?: enrollmentWhereInput[];
      NOT?: enrollmentWhereInput | enrollmentWhereInput[];
      student_id?: UuidFilter<'enrollment'> | string;
      course_id?: UuidFilter<'enrollment'> | string;
      enrollment_date?: DateTimeNullableFilter<'enrollment'> | Date | string | null;
      completion_date?: DateTimeNullableFilter<'enrollment'> | Date | string | null;
      grade?: IntNullableFilter<'enrollment'> | number | null;
      created_at?: DateTimeFilter<'enrollment'> | Date | string;
      updated_at?: DateTimeFilter<'enrollment'> | Date | string;
      course?: XOR<CourseRelationFilter, courseWhereInput>;
      student?: XOR<StudentRelationFilter, studentWhereInput>;
    },
    'id'
  >;

  export type enrollmentOrderByWithAggregationInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    course_id?: SortOrder;
    enrollment_date?: SortOrderInput | SortOrder;
    completion_date?: SortOrderInput | SortOrder;
    grade?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: enrollmentCountOrderByAggregateInput;
    _avg?: enrollmentAvgOrderByAggregateInput;
    _max?: enrollmentMaxOrderByAggregateInput;
    _min?: enrollmentMinOrderByAggregateInput;
    _sum?: enrollmentSumOrderByAggregateInput;
  };

  export type enrollmentScalarWhereWithAggregatesInput = {
    AND?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[];
    OR?: enrollmentScalarWhereWithAggregatesInput[];
    NOT?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'enrollment'> | string;
    student_id?: UuidWithAggregatesFilter<'enrollment'> | string;
    course_id?: UuidWithAggregatesFilter<'enrollment'> | string;
    enrollment_date?: DateTimeNullableWithAggregatesFilter<'enrollment'> | Date | string | null;
    completion_date?: DateTimeNullableWithAggregatesFilter<'enrollment'> | Date | string | null;
    grade?: IntNullableWithAggregatesFilter<'enrollment'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'enrollment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'enrollment'> | Date | string;
  };

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[];
    OR?: studentWhereInput[];
    NOT?: studentWhereInput | studentWhereInput[];
    id?: UuidFilter<'student'> | string;
    description?: StringNullableFilter<'student'> | string | null;
    grade_level?: IntNullableFilter<'student'> | number | null;
    enrollment_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    graduation_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    name?: StringFilter<'student'> | string;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
    user_id?: UuidFilter<'student'> | string;
    tenant_id?: StringFilter<'student'> | string;
    assignment?: AssignmentListRelationFilter;
    enrollment?: EnrollmentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type studentOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    grade_level?: SortOrderInput | SortOrder;
    enrollment_date?: SortOrderInput | SortOrder;
    graduation_date?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    assignment?: assignmentOrderByRelationAggregateInput;
    enrollment?: enrollmentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type studentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: studentWhereInput | studentWhereInput[];
      OR?: studentWhereInput[];
      NOT?: studentWhereInput | studentWhereInput[];
      description?: StringNullableFilter<'student'> | string | null;
      grade_level?: IntNullableFilter<'student'> | number | null;
      enrollment_date?: DateTimeNullableFilter<'student'> | Date | string | null;
      graduation_date?: DateTimeNullableFilter<'student'> | Date | string | null;
      name?: StringFilter<'student'> | string;
      created_at?: DateTimeFilter<'student'> | Date | string;
      updated_at?: DateTimeFilter<'student'> | Date | string;
      user_id?: UuidFilter<'student'> | string;
      tenant_id?: StringFilter<'student'> | string;
      assignment?: AssignmentListRelationFilter;
      enrollment?: EnrollmentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    grade_level?: SortOrderInput | SortOrder;
    enrollment_date?: SortOrderInput | SortOrder;
    graduation_date?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: studentCountOrderByAggregateInput;
    _avg?: studentAvgOrderByAggregateInput;
    _max?: studentMaxOrderByAggregateInput;
    _min?: studentMinOrderByAggregateInput;
    _sum?: studentSumOrderByAggregateInput;
  };

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    OR?: studentScalarWhereWithAggregatesInput[];
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'student'> | string;
    description?: StringNullableWithAggregatesFilter<'student'> | string | null;
    grade_level?: IntNullableWithAggregatesFilter<'student'> | number | null;
    enrollment_date?: DateTimeNullableWithAggregatesFilter<'student'> | Date | string | null;
    graduation_date?: DateTimeNullableWithAggregatesFilter<'student'> | Date | string | null;
    name?: StringWithAggregatesFilter<'student'> | string;
    created_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'student'> | string;
    tenant_id?: StringWithAggregatesFilter<'student'> | string;
  };

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[];
    OR?: teacherWhereInput[];
    NOT?: teacherWhereInput | teacherWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    name?: StringFilter<'teacher'> | string;
    subject?: StringNullableFilter<'teacher'> | string | null;
    hire_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    termination_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    user_id?: UuidFilter<'teacher'> | string;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
    course?: CourseListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    subject?: SortOrderInput | SortOrder;
    hire_date?: SortOrderInput | SortOrder;
    termination_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    course?: courseOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type teacherWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teacherWhereInput | teacherWhereInput[];
      OR?: teacherWhereInput[];
      NOT?: teacherWhereInput | teacherWhereInput[];
      name?: StringFilter<'teacher'> | string;
      subject?: StringNullableFilter<'teacher'> | string | null;
      hire_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
      termination_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
      user_id?: UuidFilter<'teacher'> | string;
      created_at?: DateTimeFilter<'teacher'> | Date | string;
      updated_at?: DateTimeFilter<'teacher'> | Date | string;
      course?: CourseListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    subject?: SortOrderInput | SortOrder;
    hire_date?: SortOrderInput | SortOrder;
    termination_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teacherCountOrderByAggregateInput;
    _max?: teacherMaxOrderByAggregateInput;
    _min?: teacherMinOrderByAggregateInput;
  };

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    OR?: teacherScalarWhereWithAggregatesInput[];
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'teacher'> | string;
    name?: StringWithAggregatesFilter<'teacher'> | string;
    subject?: StringNullableWithAggregatesFilter<'teacher'> | string | null;
    hire_date?: DateTimeNullableWithAggregatesFilter<'teacher'> | Date | string | null;
    termination_date?: DateTimeNullableWithAggregatesFilter<'teacher'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'teacher'> | string;
    created_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    student?: StudentListRelationFilter;
    teacher?: TeacherListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    student?: studentOrderByRelationAggregateInput;
    teacher?: teacherOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      student?: StudentListRelationFilter;
      teacher?: TeacherListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type assignmentCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course: courseCreateNestedOneWithoutAssignmentInput;
    student: studentCreateNestedOneWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    course_id: string;
    student_id: string;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateOneRequiredWithoutAssignmentNestedInput;
    student?: studentUpdateOneRequiredWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course_id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assignmentCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    course_id: string;
    student_id: string;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course_id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment?: assignmentCreateNestedManyWithoutCourseInput;
    teacher: teacherCreateNestedOneWithoutCourseInput;
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput;
  };

  export type courseUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    teacher_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment?: assignmentUncheckedCreateNestedManyWithoutCourseInput;
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUpdateManyWithoutCourseNestedInput;
    teacher?: teacherUpdateOneRequiredWithoutCourseNestedInput;
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUncheckedUpdateManyWithoutCourseNestedInput;
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type courseCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    teacher_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentCreateInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course: courseCreateNestedOneWithoutEnrollmentInput;
    student: studentCreateNestedOneWithoutEnrollmentInput;
  };

  export type enrollmentUncheckedCreateInput = {
    id?: string;
    student_id: string;
    course_id: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type enrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateOneRequiredWithoutEnrollmentNestedInput;
    student?: studentUpdateOneRequiredWithoutEnrollmentNestedInput;
  };

  export type enrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    course_id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentCreateManyInput = {
    id?: string;
    student_id: string;
    course_id: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type enrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    course_id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentCreateInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    assignment?: assignmentCreateNestedManyWithoutStudentInput;
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    assignment?: assignmentUncheckedCreateNestedManyWithoutStudentInput;
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    assignment?: assignmentUpdateManyWithoutStudentNestedInput;
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    assignment?: assignmentUncheckedUpdateManyWithoutStudentNestedInput;
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentCreateManyInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type studentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type studentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teacherCreateInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutTeacherInput;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutTeacherInput;
  };

  export type teacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutTeacherNestedInput;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutTeacherNestedInput;
  };

  export type teacherCreateManyInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CourseRelationFilter = {
    is?: courseWhereInput;
    isNot?: courseWhereInput;
  };

  export type StudentRelationFilter = {
    is?: studentWhereInput;
    isNot?: studentWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type assignmentCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    due_date?: SortOrder;
    course_id?: SortOrder;
    student_id?: SortOrder;
    grade?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assignmentAvgOrderByAggregateInput = {
    grade?: SortOrder;
  };

  export type assignmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    due_date?: SortOrder;
    course_id?: SortOrder;
    student_id?: SortOrder;
    grade?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assignmentMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    due_date?: SortOrder;
    course_id?: SortOrder;
    student_id?: SortOrder;
    grade?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assignmentSumOrderByAggregateInput = {
    grade?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type AssignmentListRelationFilter = {
    every?: assignmentWhereInput;
    some?: assignmentWhereInput;
    none?: assignmentWhereInput;
  };

  export type TeacherRelationFilter = {
    is?: teacherWhereInput;
    isNot?: teacherWhereInput;
  };

  export type EnrollmentListRelationFilter = {
    every?: enrollmentWhereInput;
    some?: enrollmentWhereInput;
    none?: enrollmentWhereInput;
  };

  export type assignmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type enrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    teacher_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    teacher_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    teacher_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type enrollmentCountOrderByAggregateInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    course_id?: SortOrder;
    enrollment_date?: SortOrder;
    completion_date?: SortOrder;
    grade?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type enrollmentAvgOrderByAggregateInput = {
    grade?: SortOrder;
  };

  export type enrollmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    course_id?: SortOrder;
    enrollment_date?: SortOrder;
    completion_date?: SortOrder;
    grade?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type enrollmentMinOrderByAggregateInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    course_id?: SortOrder;
    enrollment_date?: SortOrder;
    completion_date?: SortOrder;
    grade?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type enrollmentSumOrderByAggregateInput = {
    grade?: SortOrder;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type studentAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type studentSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type CourseListRelationFilter = {
    every?: courseWhereInput;
    some?: courseWhereInput;
    none?: courseWhereInput;
  };

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StudentListRelationFilter = {
    every?: studentWhereInput;
    some?: studentWhereInput;
    none?: studentWhereInput;
  };

  export type TeacherListRelationFilter = {
    every?: teacherWhereInput;
    some?: teacherWhereInput;
    none?: teacherWhereInput;
  };

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teacherOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: courseCreateOrConnectWithoutAssignmentInput;
    connect?: courseWhereUniqueInput;
  };

  export type studentCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<studentCreateWithoutAssignmentInput, studentUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: studentCreateOrConnectWithoutAssignmentInput;
    connect?: studentWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type courseUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: courseCreateOrConnectWithoutAssignmentInput;
    upsert?: courseUpsertWithoutAssignmentInput;
    connect?: courseWhereUniqueInput;
    update?: XOR<
      XOR<courseUpdateToOneWithWhereWithoutAssignmentInput, courseUpdateWithoutAssignmentInput>,
      courseUncheckedUpdateWithoutAssignmentInput
    >;
  };

  export type studentUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<studentCreateWithoutAssignmentInput, studentUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: studentCreateOrConnectWithoutAssignmentInput;
    upsert?: studentUpsertWithoutAssignmentInput;
    connect?: studentWhereUniqueInput;
    update?: XOR<
      XOR<studentUpdateToOneWithWhereWithoutAssignmentInput, studentUpdateWithoutAssignmentInput>,
      studentUncheckedUpdateWithoutAssignmentInput
    >;
  };

  export type assignmentCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>
      | assignmentCreateWithoutCourseInput[]
      | assignmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutCourseInput | assignmentCreateOrConnectWithoutCourseInput[];
    createMany?: assignmentCreateManyCourseInputEnvelope;
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
  };

  export type teacherCreateNestedOneWithoutCourseInput = {
    create?: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: teacherCreateOrConnectWithoutCourseInput;
    connect?: teacherWhereUniqueInput;
  };

  export type enrollmentCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
      | enrollmentCreateWithoutCourseInput[]
      | enrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[];
    createMany?: enrollmentCreateManyCourseInputEnvelope;
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
  };

  export type assignmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>
      | assignmentCreateWithoutCourseInput[]
      | assignmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutCourseInput | assignmentCreateOrConnectWithoutCourseInput[];
    createMany?: assignmentCreateManyCourseInputEnvelope;
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
  };

  export type enrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?:
      | XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
      | enrollmentCreateWithoutCourseInput[]
      | enrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[];
    createMany?: enrollmentCreateManyCourseInputEnvelope;
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
  };

  export type assignmentUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>
      | assignmentCreateWithoutCourseInput[]
      | assignmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutCourseInput | assignmentCreateOrConnectWithoutCourseInput[];
    upsert?: assignmentUpsertWithWhereUniqueWithoutCourseInput | assignmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: assignmentCreateManyCourseInputEnvelope;
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    update?: assignmentUpdateWithWhereUniqueWithoutCourseInput | assignmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: assignmentUpdateManyWithWhereWithoutCourseInput | assignmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[];
  };

  export type teacherUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: teacherCreateOrConnectWithoutCourseInput;
    upsert?: teacherUpsertWithoutCourseInput;
    connect?: teacherWhereUniqueInput;
    update?: XOR<
      XOR<teacherUpdateToOneWithWhereWithoutCourseInput, teacherUpdateWithoutCourseInput>,
      teacherUncheckedUpdateWithoutCourseInput
    >;
  };

  export type enrollmentUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
      | enrollmentCreateWithoutCourseInput[]
      | enrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[];
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCourseInput | enrollmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: enrollmentCreateManyCourseInputEnvelope;
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    update?: enrollmentUpdateWithWhereUniqueWithoutCourseInput | enrollmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: enrollmentUpdateManyWithWhereWithoutCourseInput | enrollmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[];
  };

  export type assignmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>
      | assignmentCreateWithoutCourseInput[]
      | assignmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutCourseInput | assignmentCreateOrConnectWithoutCourseInput[];
    upsert?: assignmentUpsertWithWhereUniqueWithoutCourseInput | assignmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: assignmentCreateManyCourseInputEnvelope;
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    update?: assignmentUpdateWithWhereUniqueWithoutCourseInput | assignmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: assignmentUpdateManyWithWhereWithoutCourseInput | assignmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[];
  };

  export type enrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?:
      | XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
      | enrollmentCreateWithoutCourseInput[]
      | enrollmentUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[];
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCourseInput | enrollmentUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: enrollmentCreateManyCourseInputEnvelope;
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    update?: enrollmentUpdateWithWhereUniqueWithoutCourseInput | enrollmentUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: enrollmentUpdateManyWithWhereWithoutCourseInput | enrollmentUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[];
  };

  export type courseCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>;
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentInput;
    connect?: courseWhereUniqueInput;
  };

  export type studentCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>;
    connectOrCreate?: studentCreateOrConnectWithoutEnrollmentInput;
    connect?: studentWhereUniqueInput;
  };

  export type courseUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>;
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentInput;
    upsert?: courseUpsertWithoutEnrollmentInput;
    connect?: courseWhereUniqueInput;
    update?: XOR<
      XOR<courseUpdateToOneWithWhereWithoutEnrollmentInput, courseUpdateWithoutEnrollmentInput>,
      courseUncheckedUpdateWithoutEnrollmentInput
    >;
  };

  export type studentUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>;
    connectOrCreate?: studentCreateOrConnectWithoutEnrollmentInput;
    upsert?: studentUpsertWithoutEnrollmentInput;
    connect?: studentWhereUniqueInput;
    update?: XOR<
      XOR<studentUpdateToOneWithWhereWithoutEnrollmentInput, studentUpdateWithoutEnrollmentInput>,
      studentUncheckedUpdateWithoutEnrollmentInput
    >;
  };

  export type assignmentCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<assignmentCreateWithoutStudentInput, assignmentUncheckedCreateWithoutStudentInput>
      | assignmentCreateWithoutStudentInput[]
      | assignmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutStudentInput | assignmentCreateOrConnectWithoutStudentInput[];
    createMany?: assignmentCreateManyStudentInputEnvelope;
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
  };

  export type enrollmentCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
      | enrollmentCreateWithoutStudentInput[]
      | enrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[];
    createMany?: enrollmentCreateManyStudentInputEnvelope;
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutStudentInput = {
    create?: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: userCreateOrConnectWithoutStudentInput;
    connect?: userWhereUniqueInput;
  };

  export type assignmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<assignmentCreateWithoutStudentInput, assignmentUncheckedCreateWithoutStudentInput>
      | assignmentCreateWithoutStudentInput[]
      | assignmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutStudentInput | assignmentCreateOrConnectWithoutStudentInput[];
    createMany?: assignmentCreateManyStudentInputEnvelope;
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
  };

  export type enrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
      | enrollmentCreateWithoutStudentInput[]
      | enrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[];
    createMany?: enrollmentCreateManyStudentInputEnvelope;
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
  };

  export type assignmentUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<assignmentCreateWithoutStudentInput, assignmentUncheckedCreateWithoutStudentInput>
      | assignmentCreateWithoutStudentInput[]
      | assignmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutStudentInput | assignmentCreateOrConnectWithoutStudentInput[];
    upsert?: assignmentUpsertWithWhereUniqueWithoutStudentInput | assignmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: assignmentCreateManyStudentInputEnvelope;
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    update?: assignmentUpdateWithWhereUniqueWithoutStudentInput | assignmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: assignmentUpdateManyWithWhereWithoutStudentInput | assignmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[];
  };

  export type enrollmentUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
      | enrollmentCreateWithoutStudentInput[]
      | enrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[];
    upsert?: enrollmentUpsertWithWhereUniqueWithoutStudentInput | enrollmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: enrollmentCreateManyStudentInputEnvelope;
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    update?: enrollmentUpdateWithWhereUniqueWithoutStudentInput | enrollmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: enrollmentUpdateManyWithWhereWithoutStudentInput | enrollmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: userCreateOrConnectWithoutStudentInput;
    upsert?: userUpsertWithoutStudentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStudentInput, userUpdateWithoutStudentInput>,
      userUncheckedUpdateWithoutStudentInput
    >;
  };

  export type assignmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<assignmentCreateWithoutStudentInput, assignmentUncheckedCreateWithoutStudentInput>
      | assignmentCreateWithoutStudentInput[]
      | assignmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: assignmentCreateOrConnectWithoutStudentInput | assignmentCreateOrConnectWithoutStudentInput[];
    upsert?: assignmentUpsertWithWhereUniqueWithoutStudentInput | assignmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: assignmentCreateManyStudentInputEnvelope;
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[];
    update?: assignmentUpdateWithWhereUniqueWithoutStudentInput | assignmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: assignmentUpdateManyWithWhereWithoutStudentInput | assignmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[];
  };

  export type enrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
      | enrollmentCreateWithoutStudentInput[]
      | enrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[];
    upsert?: enrollmentUpsertWithWhereUniqueWithoutStudentInput | enrollmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: enrollmentCreateManyStudentInputEnvelope;
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[];
    update?: enrollmentUpdateWithWhereUniqueWithoutStudentInput | enrollmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: enrollmentUpdateManyWithWhereWithoutStudentInput | enrollmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[];
  };

  export type courseCreateNestedManyWithoutTeacherInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutTeacherInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput;
    connect?: userWhereUniqueInput;
  };

  export type courseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type courseUpdateManyWithoutTeacherNestedInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput;
    upsert?: userUpsertWithoutTeacherInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeacherInput, userUpdateWithoutTeacherInput>,
      userUncheckedUpdateWithoutTeacherInput
    >;
  };

  export type courseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type studentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type studentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type courseCreateWithoutAssignmentInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher: teacherCreateNestedOneWithoutCourseInput;
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput;
  };

  export type courseUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    teacher_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type courseCreateOrConnectWithoutAssignmentInput = {
    where: courseWhereUniqueInput;
    create: XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>;
  };

  export type studentCreateWithoutAssignmentInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutAssignmentInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutAssignmentInput, studentUncheckedCreateWithoutAssignmentInput>;
  };

  export type courseUpsertWithoutAssignmentInput = {
    update: XOR<courseUpdateWithoutAssignmentInput, courseUncheckedUpdateWithoutAssignmentInput>;
    create: XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>;
    where?: courseWhereInput;
  };

  export type courseUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: courseWhereInput;
    data: XOR<courseUpdateWithoutAssignmentInput, courseUncheckedUpdateWithoutAssignmentInput>;
  };

  export type courseUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: teacherUpdateOneRequiredWithoutCourseNestedInput;
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type studentUpsertWithoutAssignmentInput = {
    update: XOR<studentUpdateWithoutAssignmentInput, studentUncheckedUpdateWithoutAssignmentInput>;
    create: XOR<studentCreateWithoutAssignmentInput, studentUncheckedCreateWithoutAssignmentInput>;
    where?: studentWhereInput;
  };

  export type studentUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: studentWhereInput;
    data: XOR<studentUpdateWithoutAssignmentInput, studentUncheckedUpdateWithoutAssignmentInput>;
  };

  export type studentUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type assignmentCreateWithoutCourseInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: studentCreateNestedOneWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateWithoutCourseInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    student_id: string;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentCreateOrConnectWithoutCourseInput = {
    where: assignmentWhereUniqueInput;
    create: XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>;
  };

  export type assignmentCreateManyCourseInputEnvelope = {
    data: assignmentCreateManyCourseInput | assignmentCreateManyCourseInput[];
    skipDuplicates?: boolean;
  };

  export type teacherCreateWithoutCourseInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutCourseInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateOrConnectWithoutCourseInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
  };

  export type enrollmentCreateWithoutCourseInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: studentCreateNestedOneWithoutEnrollmentInput;
  };

  export type enrollmentUncheckedCreateWithoutCourseInput = {
    id?: string;
    student_id: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type enrollmentCreateOrConnectWithoutCourseInput = {
    where: enrollmentWhereUniqueInput;
    create: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>;
  };

  export type enrollmentCreateManyCourseInputEnvelope = {
    data: enrollmentCreateManyCourseInput | enrollmentCreateManyCourseInput[];
    skipDuplicates?: boolean;
  };

  export type assignmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: assignmentWhereUniqueInput;
    update: XOR<assignmentUpdateWithoutCourseInput, assignmentUncheckedUpdateWithoutCourseInput>;
    create: XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>;
  };

  export type assignmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: assignmentWhereUniqueInput;
    data: XOR<assignmentUpdateWithoutCourseInput, assignmentUncheckedUpdateWithoutCourseInput>;
  };

  export type assignmentUpdateManyWithWhereWithoutCourseInput = {
    where: assignmentScalarWhereInput;
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutCourseInput>;
  };

  export type assignmentScalarWhereInput = {
    AND?: assignmentScalarWhereInput | assignmentScalarWhereInput[];
    OR?: assignmentScalarWhereInput[];
    NOT?: assignmentScalarWhereInput | assignmentScalarWhereInput[];
    id?: UuidFilter<'assignment'> | string;
    name?: StringFilter<'assignment'> | string;
    description?: StringNullableFilter<'assignment'> | string | null;
    due_date?: DateTimeNullableFilter<'assignment'> | Date | string | null;
    course_id?: UuidFilter<'assignment'> | string;
    student_id?: UuidFilter<'assignment'> | string;
    grade?: IntNullableFilter<'assignment'> | number | null;
    created_at?: DateTimeFilter<'assignment'> | Date | string;
    updated_at?: DateTimeFilter<'assignment'> | Date | string;
  };

  export type teacherUpsertWithoutCourseInput = {
    update: XOR<teacherUpdateWithoutCourseInput, teacherUncheckedUpdateWithoutCourseInput>;
    create: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
    where?: teacherWhereInput;
  };

  export type teacherUpdateToOneWithWhereWithoutCourseInput = {
    where?: teacherWhereInput;
    data: XOR<teacherUpdateWithoutCourseInput, teacherUncheckedUpdateWithoutCourseInput>;
  };

  export type teacherUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: enrollmentWhereUniqueInput;
    update: XOR<enrollmentUpdateWithoutCourseInput, enrollmentUncheckedUpdateWithoutCourseInput>;
    create: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>;
  };

  export type enrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: enrollmentWhereUniqueInput;
    data: XOR<enrollmentUpdateWithoutCourseInput, enrollmentUncheckedUpdateWithoutCourseInput>;
  };

  export type enrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: enrollmentScalarWhereInput;
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutCourseInput>;
  };

  export type enrollmentScalarWhereInput = {
    AND?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[];
    OR?: enrollmentScalarWhereInput[];
    NOT?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[];
    id?: UuidFilter<'enrollment'> | string;
    student_id?: UuidFilter<'enrollment'> | string;
    course_id?: UuidFilter<'enrollment'> | string;
    enrollment_date?: DateTimeNullableFilter<'enrollment'> | Date | string | null;
    completion_date?: DateTimeNullableFilter<'enrollment'> | Date | string | null;
    grade?: IntNullableFilter<'enrollment'> | number | null;
    created_at?: DateTimeFilter<'enrollment'> | Date | string;
    updated_at?: DateTimeFilter<'enrollment'> | Date | string;
  };

  export type courseCreateWithoutEnrollmentInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment?: assignmentCreateNestedManyWithoutCourseInput;
    teacher: teacherCreateNestedOneWithoutCourseInput;
  };

  export type courseUncheckedCreateWithoutEnrollmentInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    teacher_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment?: assignmentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type courseCreateOrConnectWithoutEnrollmentInput = {
    where: courseWhereUniqueInput;
    create: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>;
  };

  export type studentCreateWithoutEnrollmentInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    assignment?: assignmentCreateNestedManyWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutEnrollmentInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    assignment?: assignmentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutEnrollmentInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>;
  };

  export type courseUpsertWithoutEnrollmentInput = {
    update: XOR<courseUpdateWithoutEnrollmentInput, courseUncheckedUpdateWithoutEnrollmentInput>;
    create: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>;
    where?: courseWhereInput;
  };

  export type courseUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: courseWhereInput;
    data: XOR<courseUpdateWithoutEnrollmentInput, courseUncheckedUpdateWithoutEnrollmentInput>;
  };

  export type courseUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUpdateManyWithoutCourseNestedInput;
    teacher?: teacherUpdateOneRequiredWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type studentUpsertWithoutEnrollmentInput = {
    update: XOR<studentUpdateWithoutEnrollmentInput, studentUncheckedUpdateWithoutEnrollmentInput>;
    create: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>;
    where?: studentWhereInput;
  };

  export type studentUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: studentWhereInput;
    data: XOR<studentUpdateWithoutEnrollmentInput, studentUncheckedUpdateWithoutEnrollmentInput>;
  };

  export type studentUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    assignment?: assignmentUpdateManyWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    assignment?: assignmentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type assignmentCreateWithoutStudentInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course: courseCreateNestedOneWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateWithoutStudentInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    course_id: string;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentCreateOrConnectWithoutStudentInput = {
    where: assignmentWhereUniqueInput;
    create: XOR<assignmentCreateWithoutStudentInput, assignmentUncheckedCreateWithoutStudentInput>;
  };

  export type assignmentCreateManyStudentInputEnvelope = {
    data: assignmentCreateManyStudentInput | assignmentCreateManyStudentInput[];
    skipDuplicates?: boolean;
  };

  export type enrollmentCreateWithoutStudentInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course: courseCreateNestedOneWithoutEnrollmentInput;
  };

  export type enrollmentUncheckedCreateWithoutStudentInput = {
    id?: string;
    course_id: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type enrollmentCreateOrConnectWithoutStudentInput = {
    where: enrollmentWhereUniqueInput;
    create: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>;
  };

  export type enrollmentCreateManyStudentInputEnvelope = {
    data: enrollmentCreateManyStudentInput | enrollmentCreateManyStudentInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutStudentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStudentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStudentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
  };

  export type assignmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: assignmentWhereUniqueInput;
    update: XOR<assignmentUpdateWithoutStudentInput, assignmentUncheckedUpdateWithoutStudentInput>;
    create: XOR<assignmentCreateWithoutStudentInput, assignmentUncheckedCreateWithoutStudentInput>;
  };

  export type assignmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: assignmentWhereUniqueInput;
    data: XOR<assignmentUpdateWithoutStudentInput, assignmentUncheckedUpdateWithoutStudentInput>;
  };

  export type assignmentUpdateManyWithWhereWithoutStudentInput = {
    where: assignmentScalarWhereInput;
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutStudentInput>;
  };

  export type enrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: enrollmentWhereUniqueInput;
    update: XOR<enrollmentUpdateWithoutStudentInput, enrollmentUncheckedUpdateWithoutStudentInput>;
    create: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>;
  };

  export type enrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: enrollmentWhereUniqueInput;
    data: XOR<enrollmentUpdateWithoutStudentInput, enrollmentUncheckedUpdateWithoutStudentInput>;
  };

  export type enrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: enrollmentScalarWhereInput;
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutStudentInput>;
  };

  export type userUpsertWithoutStudentInput = {
    update: XOR<userUpdateWithoutStudentInput, userUncheckedUpdateWithoutStudentInput>;
    create: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStudentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStudentInput, userUncheckedUpdateWithoutStudentInput>;
  };

  export type userUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type courseCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment?: assignmentCreateNestedManyWithoutCourseInput;
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput;
  };

  export type courseUncheckedCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment?: assignmentUncheckedCreateNestedManyWithoutCourseInput;
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput;
  };

  export type courseCreateOrConnectWithoutTeacherInput = {
    where: courseWhereUniqueInput;
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>;
  };

  export type courseCreateManyTeacherInputEnvelope = {
    data: courseCreateManyTeacherInput | courseCreateManyTeacherInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutTeacherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    student?: studentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeacherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeacherInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
  };

  export type courseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput;
    update: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>;
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>;
  };

  export type courseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput;
    data: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>;
  };

  export type courseUpdateManyWithWhereWithoutTeacherInput = {
    where: courseScalarWhereInput;
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutTeacherInput>;
  };

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[];
    OR?: courseScalarWhereInput[];
    NOT?: courseScalarWhereInput | courseScalarWhereInput[];
    id?: UuidFilter<'course'> | string;
    name?: StringFilter<'course'> | string;
    description?: StringNullableFilter<'course'> | string | null;
    start_date?: DateTimeNullableFilter<'course'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'course'> | Date | string | null;
    teacher_id?: UuidFilter<'course'> | string;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
  };

  export type userUpsertWithoutTeacherInput = {
    update: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>;
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeacherInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>;
  };

  export type userUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type studentCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    assignment?: assignmentCreateNestedManyWithoutStudentInput;
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    assignment?: assignmentUncheckedCreateNestedManyWithoutStudentInput;
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutUserInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>;
  };

  export type studentCreateManyUserInputEnvelope = {
    data: studentCreateManyUserInput | studentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type teacherCreateWithoutUserInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutTeacherInput;
  };

  export type teacherCreateOrConnectWithoutUserInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>;
  };

  export type teacherCreateManyUserInputEnvelope = {
    data: teacherCreateManyUserInput | teacherCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type studentUpsertWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>;
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>;
  };

  export type studentUpdateManyWithWhereWithoutUserInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutUserInput>;
  };

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[];
    OR?: studentScalarWhereInput[];
    NOT?: studentScalarWhereInput | studentScalarWhereInput[];
    id?: UuidFilter<'student'> | string;
    description?: StringNullableFilter<'student'> | string | null;
    grade_level?: IntNullableFilter<'student'> | number | null;
    enrollment_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    graduation_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    name?: StringFilter<'student'> | string;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
    user_id?: UuidFilter<'student'> | string;
    tenant_id?: StringFilter<'student'> | string;
  };

  export type teacherUpsertWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput;
    update: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>;
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>;
  };

  export type teacherUpdateWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput;
    data: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>;
  };

  export type teacherUpdateManyWithWhereWithoutUserInput = {
    where: teacherScalarWhereInput;
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyWithoutUserInput>;
  };

  export type teacherScalarWhereInput = {
    AND?: teacherScalarWhereInput | teacherScalarWhereInput[];
    OR?: teacherScalarWhereInput[];
    NOT?: teacherScalarWhereInput | teacherScalarWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    name?: StringFilter<'teacher'> | string;
    subject?: StringNullableFilter<'teacher'> | string | null;
    hire_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    termination_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    user_id?: UuidFilter<'teacher'> | string;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
  };

  export type assignmentCreateManyCourseInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    student_id: string;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type enrollmentCreateManyCourseInput = {
    id?: string;
    student_id: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateOneRequiredWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student_id?: StringFieldUpdateOperationsInput | string;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assignmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student_id?: StringFieldUpdateOperationsInput | string;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateOneRequiredWithoutEnrollmentNestedInput;
  };

  export type enrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assignmentCreateManyStudentInput = {
    id?: string;
    name: string;
    description?: string | null;
    due_date?: Date | string | null;
    course_id: string;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type enrollmentCreateManyStudentInput = {
    id?: string;
    course_id: string;
    enrollment_date?: Date | string | null;
    completion_date?: Date | string | null;
    grade?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateOneRequiredWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course_id?: StringFieldUpdateOperationsInput | string;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assignmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course_id?: StringFieldUpdateOperationsInput | string;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateOneRequiredWithoutEnrollmentNestedInput;
  };

  export type enrollmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type enrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateManyTeacherInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUpdateManyWithoutCourseNestedInput;
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUncheckedUpdateManyWithoutCourseNestedInput;
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentCreateManyUserInput = {
    id?: string;
    description?: string | null;
    grade_level?: number | null;
    enrollment_date?: Date | string | null;
    graduation_date?: Date | string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type teacherCreateManyUserInput = {
    id?: string;
    name: string;
    subject?: string | null;
    hire_date?: Date | string | null;
    termination_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    assignment?: assignmentUpdateManyWithoutStudentNestedInput;
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    assignment?: assignmentUncheckedUpdateManyWithoutStudentNestedInput;
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CourseCountOutputTypeDefaultArgs instead
   */
  export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CourseCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StudentCountOutputTypeDefaultArgs instead
   */
  export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    StudentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeacherCountOutputTypeDefaultArgs instead
   */
  export type TeacherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeacherCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use assignmentDefaultArgs instead
   */
  export type assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    assignmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use courseDefaultArgs instead
   */
  export type courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    courseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use enrollmentDefaultArgs instead
   */
  export type enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    enrollmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use studentDefaultArgs instead
   */
  export type studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    studentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teacherDefaultArgs instead
   */
  export type teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    teacherDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
