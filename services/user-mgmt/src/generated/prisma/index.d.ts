
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model BlockedUser
 * 
 */
export type BlockedUser = $Result.DefaultSelection<Prisma.$BlockedUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FriendshipStatus: {
  pending: 'pending',
  accepted: 'accepted',
  declined: 'declined',
  canceled: 'canceled'
};

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]

}

export type FriendshipStatus = $Enums.FriendshipStatus

export const FriendshipStatus: typeof $Enums.FriendshipStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedUser`: Exposes CRUD operations for the **BlockedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedUsers
    * const blockedUsers = await prisma.blockedUser.findMany()
    * ```
    */
  get blockedUser(): Prisma.BlockedUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserProfile: 'UserProfile',
    Friendship: 'Friendship',
    BlockedUser: 'BlockedUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userProfile" | "friendship" | "blockedUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      BlockedUser: {
        payload: Prisma.$BlockedUserPayload<ExtArgs>
        fields: Prisma.BlockedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          findFirst: {
            args: Prisma.BlockedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          findMany: {
            args: Prisma.BlockedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          create: {
            args: Prisma.BlockedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          createMany: {
            args: Prisma.BlockedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          delete: {
            args: Prisma.BlockedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          update: {
            args: Prisma.BlockedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          deleteMany: {
            args: Prisma.BlockedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          upsert: {
            args: Prisma.BlockedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          aggregate: {
            args: Prisma.BlockedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedUser>
          }
          groupBy: {
            args: Prisma.BlockedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedUserCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userProfile?: UserProfileOmit
    friendship?: FriendshipOmit
    blockedUser?: BlockedUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    sentFriendReq: number
    receivedFriendReq: number
    BlockedUsers: number
    BlockedByUsers: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentFriendReq?: boolean | UserProfileCountOutputTypeCountSentFriendReqArgs
    receivedFriendReq?: boolean | UserProfileCountOutputTypeCountReceivedFriendReqArgs
    BlockedUsers?: boolean | UserProfileCountOutputTypeCountBlockedUsersArgs
    BlockedByUsers?: boolean | UserProfileCountOutputTypeCountBlockedByUsersArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountSentFriendReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountReceivedFriendReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountBlockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountBlockedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    avatarPath: string | null
    avatarName: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    avatarPath: string | null
    avatarName: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    username: number
    avatarPath: number
    avatarName: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    username?: true
    avatarPath?: true
    avatarName?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    username?: true
    avatarPath?: true
    avatarName?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    username?: true
    avatarPath?: true
    avatarName?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    username: string
    avatarPath: string | null
    avatarName: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatarPath?: boolean
    avatarName?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentFriendReq?: boolean | UserProfile$sentFriendReqArgs<ExtArgs>
    receivedFriendReq?: boolean | UserProfile$receivedFriendReqArgs<ExtArgs>
    BlockedUsers?: boolean | UserProfile$BlockedUsersArgs<ExtArgs>
    BlockedByUsers?: boolean | UserProfile$BlockedByUsersArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatarPath?: boolean
    avatarName?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatarPath?: boolean
    avatarName?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    username?: boolean
    avatarPath?: boolean
    avatarName?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "avatarPath" | "avatarName" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentFriendReq?: boolean | UserProfile$sentFriendReqArgs<ExtArgs>
    receivedFriendReq?: boolean | UserProfile$receivedFriendReqArgs<ExtArgs>
    BlockedUsers?: boolean | UserProfile$BlockedUsersArgs<ExtArgs>
    BlockedByUsers?: boolean | UserProfile$BlockedByUsersArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      sentFriendReq: Prisma.$FriendshipPayload<ExtArgs>[]
      receivedFriendReq: Prisma.$FriendshipPayload<ExtArgs>[]
      BlockedUsers: Prisma.$BlockedUserPayload<ExtArgs>[]
      BlockedByUsers: Prisma.$BlockedUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      avatarPath: string | null
      avatarName: string | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentFriendReq<T extends UserProfile$sentFriendReqArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$sentFriendReqArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendReq<T extends UserProfile$receivedFriendReqArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$receivedFriendReqArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BlockedUsers<T extends UserProfile$BlockedUsersArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$BlockedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BlockedByUsers<T extends UserProfile$BlockedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$BlockedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly username: FieldRef<"UserProfile", 'String'>
    readonly avatarPath: FieldRef<"UserProfile", 'String'>
    readonly avatarName: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.sentFriendReq
   */
  export type UserProfile$sentFriendReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * UserProfile.receivedFriendReq
   */
  export type UserProfile$receivedFriendReqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * UserProfile.BlockedUsers
   */
  export type UserProfile$BlockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    cursor?: BlockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * UserProfile.BlockedByUsers
   */
  export type UserProfile$BlockedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    cursor?: BlockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    receiverId: string | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    receiverId: string | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    requesterId: number
    receiverId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    requesterId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    requesterId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    requesterId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    requesterId: string
    receiverId: string
    status: $Enums.FriendshipStatus
    createdAt: Date
    updatedAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserProfileDefaultArgs<ExtArgs>
    receiver?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserProfileDefaultArgs<ExtArgs>
    receiver?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserProfileDefaultArgs<ExtArgs>
    receiver?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    requesterId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "receiverId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserProfileDefaultArgs<ExtArgs>
    receiver?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserProfileDefaultArgs<ExtArgs>
    receiver?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserProfileDefaultArgs<ExtArgs>
    receiver?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      requester: Prisma.$UserProfilePayload<ExtArgs>
      receiver: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      receiverId: string
      status: $Enums.FriendshipStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly requesterId: FieldRef<"Friendship", 'String'>
    readonly receiverId: FieldRef<"Friendship", 'String'>
    readonly status: FieldRef<"Friendship", 'FriendshipStatus'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
    readonly updatedAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model BlockedUser
   */

  export type AggregateBlockedUser = {
    _count: BlockedUserCountAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  export type BlockedUserMinAggregateOutputType = {
    id: string | null
    blockerId: string | null
    blockedId: string | null
    createdAt: Date | null
  }

  export type BlockedUserMaxAggregateOutputType = {
    id: string | null
    blockerId: string | null
    blockedId: string | null
    createdAt: Date | null
  }

  export type BlockedUserCountAggregateOutputType = {
    id: number
    blockerId: number
    blockedId: number
    createdAt: number
    _all: number
  }


  export type BlockedUserMinAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
  }

  export type BlockedUserMaxAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
  }

  export type BlockedUserCountAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
    _all?: true
  }

  export type BlockedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedUser to aggregate.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedUsers
    **/
    _count?: true | BlockedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedUserMaxAggregateInputType
  }

  export type GetBlockedUserAggregateType<T extends BlockedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedUser[P]>
      : GetScalarType<T[P], AggregateBlockedUser[P]>
  }




  export type BlockedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithAggregationInput | BlockedUserOrderByWithAggregationInput[]
    by: BlockedUserScalarFieldEnum[] | BlockedUserScalarFieldEnum
    having?: BlockedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedUserCountAggregateInputType | true
    _min?: BlockedUserMinAggregateInputType
    _max?: BlockedUserMaxAggregateInputType
  }

  export type BlockedUserGroupByOutputType = {
    id: string
    blockerId: string
    blockedId: string
    createdAt: Date
    _count: BlockedUserCountAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  type GetBlockedUserGroupByPayload<T extends BlockedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
        }
      >
    >


  export type BlockedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    blocker?: boolean | UserProfileDefaultArgs<ExtArgs>
    blocked?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type BlockedUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    blocker?: boolean | UserProfileDefaultArgs<ExtArgs>
    blocked?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type BlockedUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    blocker?: boolean | UserProfileDefaultArgs<ExtArgs>
    blocked?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type BlockedUserSelectScalar = {
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
  }

  export type BlockedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockerId" | "blockedId" | "createdAt", ExtArgs["result"]["blockedUser"]>
  export type BlockedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserProfileDefaultArgs<ExtArgs>
    blocked?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type BlockedUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserProfileDefaultArgs<ExtArgs>
    blocked?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type BlockedUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserProfileDefaultArgs<ExtArgs>
    blocked?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $BlockedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedUser"
    objects: {
      blocker: Prisma.$UserProfilePayload<ExtArgs>
      blocked: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockerId: string
      blockedId: string
      createdAt: Date
    }, ExtArgs["result"]["blockedUser"]>
    composites: {}
  }

  type BlockedUserGetPayload<S extends boolean | null | undefined | BlockedUserDefaultArgs> = $Result.GetResult<Prisma.$BlockedUserPayload, S>

  type BlockedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedUserCountAggregateInputType | true
    }

  export interface BlockedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedUser'], meta: { name: 'BlockedUser' } }
    /**
     * Find zero or one BlockedUser that matches the filter.
     * @param {BlockedUserFindUniqueArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedUserFindUniqueArgs>(args: SelectSubset<T, BlockedUserFindUniqueArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedUserFindUniqueOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindFirstArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedUserFindFirstArgs>(args?: SelectSubset<T, BlockedUserFindFirstArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindFirstOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany()
     * 
     * // Get first 10 BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedUserFindManyArgs>(args?: SelectSubset<T, BlockedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedUser.
     * @param {BlockedUserCreateArgs} args - Arguments to create a BlockedUser.
     * @example
     * // Create one BlockedUser
     * const BlockedUser = await prisma.blockedUser.create({
     *   data: {
     *     // ... data to create a BlockedUser
     *   }
     * })
     * 
     */
    create<T extends BlockedUserCreateArgs>(args: SelectSubset<T, BlockedUserCreateArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedUsers.
     * @param {BlockedUserCreateManyArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedUserCreateManyArgs>(args?: SelectSubset<T, BlockedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedUsers and returns the data saved in the database.
     * @param {BlockedUserCreateManyAndReturnArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedUsers and only return the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedUserCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedUser.
     * @param {BlockedUserDeleteArgs} args - Arguments to delete one BlockedUser.
     * @example
     * // Delete one BlockedUser
     * const BlockedUser = await prisma.blockedUser.delete({
     *   where: {
     *     // ... filter to delete one BlockedUser
     *   }
     * })
     * 
     */
    delete<T extends BlockedUserDeleteArgs>(args: SelectSubset<T, BlockedUserDeleteArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedUser.
     * @param {BlockedUserUpdateArgs} args - Arguments to update one BlockedUser.
     * @example
     * // Update one BlockedUser
     * const blockedUser = await prisma.blockedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedUserUpdateArgs>(args: SelectSubset<T, BlockedUserUpdateArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedUsers.
     * @param {BlockedUserDeleteManyArgs} args - Arguments to filter BlockedUsers to delete.
     * @example
     * // Delete a few BlockedUsers
     * const { count } = await prisma.blockedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedUserDeleteManyArgs>(args?: SelectSubset<T, BlockedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedUserUpdateManyArgs>(args: SelectSubset<T, BlockedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers and returns the data updated in the database.
     * @param {BlockedUserUpdateManyAndReturnArgs} args - Arguments to update many BlockedUsers.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedUsers and only return the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockedUserUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedUser.
     * @param {BlockedUserUpsertArgs} args - Arguments to update or create a BlockedUser.
     * @example
     * // Update or create a BlockedUser
     * const blockedUser = await prisma.blockedUser.upsert({
     *   create: {
     *     // ... data to create a BlockedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedUser we want to update
     *   }
     * })
     */
    upsert<T extends BlockedUserUpsertArgs>(args: SelectSubset<T, BlockedUserUpsertArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserCountArgs} args - Arguments to filter BlockedUsers to count.
     * @example
     * // Count the number of BlockedUsers
     * const count = await prisma.blockedUser.count({
     *   where: {
     *     // ... the filter for the BlockedUsers we want to count
     *   }
     * })
    **/
    count<T extends BlockedUserCountArgs>(
      args?: Subset<T, BlockedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockedUserAggregateArgs>(args: Subset<T, BlockedUserAggregateArgs>): Prisma.PrismaPromise<GetBlockedUserAggregateType<T>>

    /**
     * Group by BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserGroupByArgs} args - Group by arguments.
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
      T extends BlockedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedUserGroupByArgs['orderBy'] }
        : { orderBy?: BlockedUserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedUser model
   */
  readonly fields: BlockedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocker<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blocked<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockedUser model
   */
  interface BlockedUserFieldRefs {
    readonly id: FieldRef<"BlockedUser", 'String'>
    readonly blockerId: FieldRef<"BlockedUser", 'String'>
    readonly blockedId: FieldRef<"BlockedUser", 'String'>
    readonly createdAt: FieldRef<"BlockedUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockedUser findUnique
   */
  export type BlockedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser findUniqueOrThrow
   */
  export type BlockedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser findFirst
   */
  export type BlockedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser findFirstOrThrow
   */
  export type BlockedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser findMany
   */
  export type BlockedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUsers to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser create
   */
  export type BlockedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedUser.
     */
    data: XOR<BlockedUserCreateInput, BlockedUserUncheckedCreateInput>
  }

  /**
   * BlockedUser createMany
   */
  export type BlockedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedUsers.
     */
    data: BlockedUserCreateManyInput | BlockedUserCreateManyInput[]
  }

  /**
   * BlockedUser createManyAndReturn
   */
  export type BlockedUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedUsers.
     */
    data: BlockedUserCreateManyInput | BlockedUserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedUser update
   */
  export type BlockedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedUser.
     */
    data: XOR<BlockedUserUpdateInput, BlockedUserUncheckedUpdateInput>
    /**
     * Choose, which BlockedUser to update.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser updateMany
   */
  export type BlockedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedUsers.
     */
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyInput>
    /**
     * Filter which BlockedUsers to update
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to update.
     */
    limit?: number
  }

  /**
   * BlockedUser updateManyAndReturn
   */
  export type BlockedUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * The data used to update BlockedUsers.
     */
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyInput>
    /**
     * Filter which BlockedUsers to update
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedUser upsert
   */
  export type BlockedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedUser to update in case it exists.
     */
    where: BlockedUserWhereUniqueInput
    /**
     * In case the BlockedUser found by the `where` argument doesn't exist, create a new BlockedUser with this data.
     */
    create: XOR<BlockedUserCreateInput, BlockedUserUncheckedCreateInput>
    /**
     * In case the BlockedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedUserUpdateInput, BlockedUserUncheckedUpdateInput>
  }

  /**
   * BlockedUser delete
   */
  export type BlockedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter which BlockedUser to delete.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser deleteMany
   */
  export type BlockedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedUsers to delete
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to delete.
     */
    limit?: number
  }

  /**
   * BlockedUser without action
   */
  export type BlockedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    avatarPath: 'avatarPath',
    avatarName: 'avatarName',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    receiverId: 'receiverId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const BlockedUserScalarFieldEnum: {
    id: 'id',
    blockerId: 'blockerId',
    blockedId: 'blockedId',
    createdAt: 'createdAt'
  };

  export type BlockedUserScalarFieldEnum = (typeof BlockedUserScalarFieldEnum)[keyof typeof BlockedUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'FriendshipStatus'
   */
  export type EnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    username?: StringFilter<"UserProfile"> | string
    avatarPath?: StringNullableFilter<"UserProfile"> | string | null
    avatarName?: StringNullableFilter<"UserProfile"> | string | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    sentFriendReq?: FriendshipListRelationFilter
    receivedFriendReq?: FriendshipListRelationFilter
    BlockedUsers?: BlockedUserListRelationFilter
    BlockedByUsers?: BlockedUserListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    avatarPath?: SortOrderInput | SortOrder
    avatarName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentFriendReq?: FriendshipOrderByRelationAggregateInput
    receivedFriendReq?: FriendshipOrderByRelationAggregateInput
    BlockedUsers?: BlockedUserOrderByRelationAggregateInput
    BlockedByUsers?: BlockedUserOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    avatarPath?: StringNullableFilter<"UserProfile"> | string | null
    avatarName?: StringNullableFilter<"UserProfile"> | string | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    sentFriendReq?: FriendshipListRelationFilter
    receivedFriendReq?: FriendshipListRelationFilter
    BlockedUsers?: BlockedUserListRelationFilter
    BlockedByUsers?: BlockedUserListRelationFilter
  }, "id" | "username">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    avatarPath?: SortOrderInput | SortOrder
    avatarName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    username?: StringWithAggregatesFilter<"UserProfile"> | string
    avatarPath?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    avatarName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    requesterId?: StringFilter<"Friendship"> | string
    receiverId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
    requester?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
    receiver?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requester?: UserProfileOrderByWithRelationInput
    receiver?: UserProfileOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requesterId_receiverId?: FriendshipRequesterIdReceiverIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    requesterId?: StringFilter<"Friendship"> | string
    receiverId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
    requester?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
    receiver?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "requesterId_receiverId">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    requesterId?: StringWithAggregatesFilter<"Friendship"> | string
    receiverId?: StringWithAggregatesFilter<"Friendship"> | string
    status?: EnumFriendshipStatusWithAggregatesFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type BlockedUserWhereInput = {
    AND?: BlockedUserWhereInput | BlockedUserWhereInput[]
    OR?: BlockedUserWhereInput[]
    NOT?: BlockedUserWhereInput | BlockedUserWhereInput[]
    id?: StringFilter<"BlockedUser"> | string
    blockerId?: StringFilter<"BlockedUser"> | string
    blockedId?: StringFilter<"BlockedUser"> | string
    createdAt?: DateTimeFilter<"BlockedUser"> | Date | string
    blocker?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
    blocked?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type BlockedUserOrderByWithRelationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
    blocker?: UserProfileOrderByWithRelationInput
    blocked?: UserProfileOrderByWithRelationInput
  }

  export type BlockedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blockerId_blockedId?: BlockedUserBlockerIdBlockedIdCompoundUniqueInput
    AND?: BlockedUserWhereInput | BlockedUserWhereInput[]
    OR?: BlockedUserWhereInput[]
    NOT?: BlockedUserWhereInput | BlockedUserWhereInput[]
    blockerId?: StringFilter<"BlockedUser"> | string
    blockedId?: StringFilter<"BlockedUser"> | string
    createdAt?: DateTimeFilter<"BlockedUser"> | Date | string
    blocker?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
    blocked?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "blockerId_blockedId">

  export type BlockedUserOrderByWithAggregationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
    _count?: BlockedUserCountOrderByAggregateInput
    _max?: BlockedUserMaxOrderByAggregateInput
    _min?: BlockedUserMinOrderByAggregateInput
  }

  export type BlockedUserScalarWhereWithAggregatesInput = {
    AND?: BlockedUserScalarWhereWithAggregatesInput | BlockedUserScalarWhereWithAggregatesInput[]
    OR?: BlockedUserScalarWhereWithAggregatesInput[]
    NOT?: BlockedUserScalarWhereWithAggregatesInput | BlockedUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlockedUser"> | string
    blockerId?: StringWithAggregatesFilter<"BlockedUser"> | string
    blockedId?: StringWithAggregatesFilter<"BlockedUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlockedUser"> | Date | string
  }

  export type UserProfileCreateInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendReq?: FriendshipCreateNestedManyWithoutReceiverInput
    BlockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    BlockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileUncheckedCreateInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendReq?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
    BlockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    BlockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendReq?: FriendshipUpdateManyWithoutReceiverNestedInput
    BlockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    BlockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendReq?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
    BlockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    BlockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileCreateManyInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserProfileCreateNestedOneWithoutSentFriendReqInput
    receiver: UserProfileCreateNestedOneWithoutReceivedFriendReqInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    requesterId: string
    receiverId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserProfileUpdateOneRequiredWithoutSentFriendReqNestedInput
    receiver?: UserProfileUpdateOneRequiredWithoutReceivedFriendReqNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    requesterId: string
    receiverId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserCreateInput = {
    id?: string
    createdAt?: Date | string
    blocker: UserProfileCreateNestedOneWithoutBlockedUsersInput
    blocked: UserProfileCreateNestedOneWithoutBlockedByUsersInput
  }

  export type BlockedUserUncheckedCreateInput = {
    id?: string
    blockerId: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocker?: UserProfileUpdateOneRequiredWithoutBlockedUsersNestedInput
    blocked?: UserProfileUpdateOneRequiredWithoutBlockedByUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserCreateManyInput = {
    id?: string
    blockerId: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type BlockedUserListRelationFilter = {
    every?: BlockedUserWhereInput
    some?: BlockedUserWhereInput
    none?: BlockedUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatarPath?: SortOrder
    avatarName?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatarPath?: SortOrder
    avatarName?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatarPath?: SortOrder
    avatarName?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type FriendshipRequesterIdReceiverIdCompoundUniqueInput = {
    requesterId: string
    receiverId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type BlockedUserBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: string
    blockedId: string
  }

  export type BlockedUserCountOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedUserMinOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type BlockedUserCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type BlockedUserCreateNestedManyWithoutBlockedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type BlockedUserUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type BlockedUserUncheckedCreateNestedManyWithoutBlockedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FriendshipUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutReceiverInput | FriendshipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutReceiverInput | FriendshipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutReceiverInput | FriendshipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type BlockedUserUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockerInput | BlockedUserUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockerInput | BlockedUserUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockerInput | BlockedUserUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type BlockedUserUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockedInput | BlockedUserUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockedInput | BlockedUserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockedInput | BlockedUserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutReceiverInput | FriendshipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutReceiverInput | FriendshipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutReceiverInput | FriendshipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockerInput | BlockedUserUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockerInput | BlockedUserUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockerInput | BlockedUserUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockedInput | BlockedUserUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockedInput | BlockedUserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockedInput | BlockedUserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type UserProfileCreateNestedOneWithoutSentFriendReqInput = {
    create?: XOR<UserProfileCreateWithoutSentFriendReqInput, UserProfileUncheckedCreateWithoutSentFriendReqInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutSentFriendReqInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutReceivedFriendReqInput = {
    create?: XOR<UserProfileCreateWithoutReceivedFriendReqInput, UserProfileUncheckedCreateWithoutReceivedFriendReqInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutReceivedFriendReqInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EnumFriendshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendshipStatus
  }

  export type UserProfileUpdateOneRequiredWithoutSentFriendReqNestedInput = {
    create?: XOR<UserProfileCreateWithoutSentFriendReqInput, UserProfileUncheckedCreateWithoutSentFriendReqInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutSentFriendReqInput
    upsert?: UserProfileUpsertWithoutSentFriendReqInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutSentFriendReqInput, UserProfileUpdateWithoutSentFriendReqInput>, UserProfileUncheckedUpdateWithoutSentFriendReqInput>
  }

  export type UserProfileUpdateOneRequiredWithoutReceivedFriendReqNestedInput = {
    create?: XOR<UserProfileCreateWithoutReceivedFriendReqInput, UserProfileUncheckedCreateWithoutReceivedFriendReqInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutReceivedFriendReqInput
    upsert?: UserProfileUpsertWithoutReceivedFriendReqInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutReceivedFriendReqInput, UserProfileUpdateWithoutReceivedFriendReqInput>, UserProfileUncheckedUpdateWithoutReceivedFriendReqInput>
  }

  export type UserProfileCreateNestedOneWithoutBlockedUsersInput = {
    create?: XOR<UserProfileCreateWithoutBlockedUsersInput, UserProfileUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutBlockedUsersInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutBlockedByUsersInput = {
    create?: XOR<UserProfileCreateWithoutBlockedByUsersInput, UserProfileUncheckedCreateWithoutBlockedByUsersInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutBlockedByUsersInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutBlockedUsersNestedInput = {
    create?: XOR<UserProfileCreateWithoutBlockedUsersInput, UserProfileUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutBlockedUsersInput
    upsert?: UserProfileUpsertWithoutBlockedUsersInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutBlockedUsersInput, UserProfileUpdateWithoutBlockedUsersInput>, UserProfileUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserProfileUpdateOneRequiredWithoutBlockedByUsersNestedInput = {
    create?: XOR<UserProfileCreateWithoutBlockedByUsersInput, UserProfileUncheckedCreateWithoutBlockedByUsersInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutBlockedByUsersInput
    upsert?: UserProfileUpsertWithoutBlockedByUsersInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutBlockedByUsersInput, UserProfileUpdateWithoutBlockedByUsersInput>, UserProfileUncheckedUpdateWithoutBlockedByUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type FriendshipCreateWithoutRequesterInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserProfileCreateNestedOneWithoutReceivedFriendReqInput
  }

  export type FriendshipUncheckedCreateWithoutRequesterInput = {
    id?: string
    receiverId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipCreateManyRequesterInputEnvelope = {
    data: FriendshipCreateManyRequesterInput | FriendshipCreateManyRequesterInput[]
  }

  export type FriendshipCreateWithoutReceiverInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserProfileCreateNestedOneWithoutSentFriendReqInput
  }

  export type FriendshipUncheckedCreateWithoutReceiverInput = {
    id?: string
    requesterId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutReceiverInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput>
  }

  export type FriendshipCreateManyReceiverInputEnvelope = {
    data: FriendshipCreateManyReceiverInput | FriendshipCreateManyReceiverInput[]
  }

  export type BlockedUserCreateWithoutBlockerInput = {
    id?: string
    createdAt?: Date | string
    blocked: UserProfileCreateNestedOneWithoutBlockedByUsersInput
  }

  export type BlockedUserUncheckedCreateWithoutBlockerInput = {
    id?: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateOrConnectWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    create: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput>
  }

  export type BlockedUserCreateManyBlockerInputEnvelope = {
    data: BlockedUserCreateManyBlockerInput | BlockedUserCreateManyBlockerInput[]
  }

  export type BlockedUserCreateWithoutBlockedInput = {
    id?: string
    createdAt?: Date | string
    blocker: UserProfileCreateNestedOneWithoutBlockedUsersInput
  }

  export type BlockedUserUncheckedCreateWithoutBlockedInput = {
    id?: string
    blockerId: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateOrConnectWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    create: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput>
  }

  export type BlockedUserCreateManyBlockedInputEnvelope = {
    data: BlockedUserCreateManyBlockedInput | BlockedUserCreateManyBlockedInput[]
  }

  export type FriendshipUpsertWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutRequesterInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutRequesterInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    requesterId?: StringFilter<"Friendship"> | string
    receiverId?: StringFilter<"Friendship"> | string
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutReceiverInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutReceiverInput, FriendshipUncheckedUpdateWithoutReceiverInput>
    create: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutReceiverInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutReceiverInput, FriendshipUncheckedUpdateWithoutReceiverInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutReceiverInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutReceiverInput>
  }

  export type BlockedUserUpsertWithWhereUniqueWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    update: XOR<BlockedUserUpdateWithoutBlockerInput, BlockedUserUncheckedUpdateWithoutBlockerInput>
    create: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput>
  }

  export type BlockedUserUpdateWithWhereUniqueWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    data: XOR<BlockedUserUpdateWithoutBlockerInput, BlockedUserUncheckedUpdateWithoutBlockerInput>
  }

  export type BlockedUserUpdateManyWithWhereWithoutBlockerInput = {
    where: BlockedUserScalarWhereInput
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyWithoutBlockerInput>
  }

  export type BlockedUserScalarWhereInput = {
    AND?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
    OR?: BlockedUserScalarWhereInput[]
    NOT?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
    id?: StringFilter<"BlockedUser"> | string
    blockerId?: StringFilter<"BlockedUser"> | string
    blockedId?: StringFilter<"BlockedUser"> | string
    createdAt?: DateTimeFilter<"BlockedUser"> | Date | string
  }

  export type BlockedUserUpsertWithWhereUniqueWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    update: XOR<BlockedUserUpdateWithoutBlockedInput, BlockedUserUncheckedUpdateWithoutBlockedInput>
    create: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput>
  }

  export type BlockedUserUpdateWithWhereUniqueWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    data: XOR<BlockedUserUpdateWithoutBlockedInput, BlockedUserUncheckedUpdateWithoutBlockedInput>
  }

  export type BlockedUserUpdateManyWithWhereWithoutBlockedInput = {
    where: BlockedUserScalarWhereInput
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyWithoutBlockedInput>
  }

  export type UserProfileCreateWithoutSentFriendReqInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedFriendReq?: FriendshipCreateNestedManyWithoutReceiverInput
    BlockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    BlockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileUncheckedCreateWithoutSentFriendReqInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedFriendReq?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
    BlockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    BlockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileCreateOrConnectWithoutSentFriendReqInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutSentFriendReqInput, UserProfileUncheckedCreateWithoutSentFriendReqInput>
  }

  export type UserProfileCreateWithoutReceivedFriendReqInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipCreateNestedManyWithoutRequesterInput
    BlockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    BlockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileUncheckedCreateWithoutReceivedFriendReqInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    BlockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    BlockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileCreateOrConnectWithoutReceivedFriendReqInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutReceivedFriendReqInput, UserProfileUncheckedCreateWithoutReceivedFriendReqInput>
  }

  export type UserProfileUpsertWithoutSentFriendReqInput = {
    update: XOR<UserProfileUpdateWithoutSentFriendReqInput, UserProfileUncheckedUpdateWithoutSentFriendReqInput>
    create: XOR<UserProfileCreateWithoutSentFriendReqInput, UserProfileUncheckedCreateWithoutSentFriendReqInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutSentFriendReqInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutSentFriendReqInput, UserProfileUncheckedUpdateWithoutSentFriendReqInput>
  }

  export type UserProfileUpdateWithoutSentFriendReqInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedFriendReq?: FriendshipUpdateManyWithoutReceiverNestedInput
    BlockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    BlockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutSentFriendReqInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedFriendReq?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
    BlockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    BlockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileUpsertWithoutReceivedFriendReqInput = {
    update: XOR<UserProfileUpdateWithoutReceivedFriendReqInput, UserProfileUncheckedUpdateWithoutReceivedFriendReqInput>
    create: XOR<UserProfileCreateWithoutReceivedFriendReqInput, UserProfileUncheckedCreateWithoutReceivedFriendReqInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutReceivedFriendReqInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutReceivedFriendReqInput, UserProfileUncheckedUpdateWithoutReceivedFriendReqInput>
  }

  export type UserProfileUpdateWithoutReceivedFriendReqInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUpdateManyWithoutRequesterNestedInput
    BlockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    BlockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutReceivedFriendReqInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    BlockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    BlockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileCreateWithoutBlockedUsersInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendReq?: FriendshipCreateNestedManyWithoutReceiverInput
    BlockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileUncheckedCreateWithoutBlockedUsersInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendReq?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
    BlockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
  }

  export type UserProfileCreateOrConnectWithoutBlockedUsersInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutBlockedUsersInput, UserProfileUncheckedCreateWithoutBlockedUsersInput>
  }

  export type UserProfileCreateWithoutBlockedByUsersInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendReq?: FriendshipCreateNestedManyWithoutReceiverInput
    BlockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
  }

  export type UserProfileUncheckedCreateWithoutBlockedByUsersInput = {
    id: string
    username: string
    avatarPath?: string | null
    avatarName?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendReq?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendReq?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
    BlockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
  }

  export type UserProfileCreateOrConnectWithoutBlockedByUsersInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutBlockedByUsersInput, UserProfileUncheckedCreateWithoutBlockedByUsersInput>
  }

  export type UserProfileUpsertWithoutBlockedUsersInput = {
    update: XOR<UserProfileUpdateWithoutBlockedUsersInput, UserProfileUncheckedUpdateWithoutBlockedUsersInput>
    create: XOR<UserProfileCreateWithoutBlockedUsersInput, UserProfileUncheckedCreateWithoutBlockedUsersInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutBlockedUsersInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutBlockedUsersInput, UserProfileUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserProfileUpdateWithoutBlockedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendReq?: FriendshipUpdateManyWithoutReceiverNestedInput
    BlockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutBlockedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendReq?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
    BlockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
  }

  export type UserProfileUpsertWithoutBlockedByUsersInput = {
    update: XOR<UserProfileUpdateWithoutBlockedByUsersInput, UserProfileUncheckedUpdateWithoutBlockedByUsersInput>
    create: XOR<UserProfileCreateWithoutBlockedByUsersInput, UserProfileUncheckedCreateWithoutBlockedByUsersInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutBlockedByUsersInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutBlockedByUsersInput, UserProfileUncheckedUpdateWithoutBlockedByUsersInput>
  }

  export type UserProfileUpdateWithoutBlockedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendReq?: FriendshipUpdateManyWithoutReceiverNestedInput
    BlockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutBlockedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarPath?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendReq?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendReq?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
    BlockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
  }

  export type FriendshipCreateManyRequesterInput = {
    id?: string
    receiverId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateManyReceiverInput = {
    id?: string
    requesterId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockedUserCreateManyBlockerInput = {
    id?: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateManyBlockedInput = {
    id?: string
    blockerId: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserProfileUpdateOneRequiredWithoutReceivedFriendReqNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserProfileUpdateOneRequiredWithoutSentFriendReqNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUpdateWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: UserProfileUpdateOneRequiredWithoutBlockedByUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocker?: UserProfileUpdateOneRequiredWithoutBlockedUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}