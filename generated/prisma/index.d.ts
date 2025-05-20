
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Parking
 * 
 */
export type Parking = $Result.DefaultSelection<Prisma.$ParkingPayload>
/**
 * Model ParkingSlot
 * 
 */
export type ParkingSlot = $Result.DefaultSelection<Prisma.$ParkingSlotPayload>
/**
 * Model ParkingSlotOrder
 * 
 */
export type ParkingSlotOrder = $Result.DefaultSelection<Prisma.$ParkingSlotOrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PARKING_ATTENDANT: 'PARKING_ATTENDANT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ParkingSlotStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  RESERVED: 'RESERVED'
};

export type ParkingSlotStatus = (typeof ParkingSlotStatus)[keyof typeof ParkingSlotStatus]


export const VehicleType: {
  CAR: 'CAR',
  BIKE: 'BIKE',
  TRUCK: 'TRUCK',
  BUS: 'BUS'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const ParkingSlotSize: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE'
};

export type ParkingSlotSize = (typeof ParkingSlotSize)[keyof typeof ParkingSlotSize]


export const ParkingSlotOrderStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ParkingSlotOrderStatus = (typeof ParkingSlotOrderStatus)[keyof typeof ParkingSlotOrderStatus]


export const ParkingCategory: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE'
};

export type ParkingCategory = (typeof ParkingCategory)[keyof typeof ParkingCategory]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ParkingSlotStatus = $Enums.ParkingSlotStatus

export const ParkingSlotStatus: typeof $Enums.ParkingSlotStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type ParkingSlotSize = $Enums.ParkingSlotSize

export const ParkingSlotSize: typeof $Enums.ParkingSlotSize

export type ParkingSlotOrderStatus = $Enums.ParkingSlotOrderStatus

export const ParkingSlotOrderStatus: typeof $Enums.ParkingSlotOrderStatus

export type ParkingCategory = $Enums.ParkingCategory

export const ParkingCategory: typeof $Enums.ParkingCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parking`: Exposes CRUD operations for the **Parking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkings
    * const parkings = await prisma.parking.findMany()
    * ```
    */
  get parking(): Prisma.ParkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSlot`: Exposes CRUD operations for the **ParkingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSlots
    * const parkingSlots = await prisma.parkingSlot.findMany()
    * ```
    */
  get parkingSlot(): Prisma.ParkingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSlotOrder`: Exposes CRUD operations for the **ParkingSlotOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSlotOrders
    * const parkingSlotOrders = await prisma.parkingSlotOrder.findMany()
    * ```
    */
  get parkingSlotOrder(): Prisma.ParkingSlotOrderDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Vehicle: 'Vehicle',
    Parking: 'Parking',
    ParkingSlot: 'ParkingSlot',
    ParkingSlotOrder: 'ParkingSlotOrder'
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
      modelProps: "user" | "vehicle" | "parking" | "parkingSlot" | "parkingSlotOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Parking: {
        payload: Prisma.$ParkingPayload<ExtArgs>
        fields: Prisma.ParkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findFirst: {
            args: Prisma.ParkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findMany: {
            args: Prisma.ParkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          create: {
            args: Prisma.ParkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          createMany: {
            args: Prisma.ParkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          delete: {
            args: Prisma.ParkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          update: {
            args: Prisma.ParkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          deleteMany: {
            args: Prisma.ParkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          upsert: {
            args: Prisma.ParkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          aggregate: {
            args: Prisma.ParkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParking>
          }
          groupBy: {
            args: Prisma.ParkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingCountAggregateOutputType> | number
          }
        }
      }
      ParkingSlot: {
        payload: Prisma.$ParkingSlotPayload<ExtArgs>
        fields: Prisma.ParkingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findMany: {
            args: Prisma.ParkingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          create: {
            args: Prisma.ParkingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          createMany: {
            args: Prisma.ParkingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          update: {
            args: Prisma.ParkingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSlot>
          }
          groupBy: {
            args: Prisma.ParkingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotCountAggregateOutputType> | number
          }
        }
      }
      ParkingSlotOrder: {
        payload: Prisma.$ParkingSlotOrderPayload<ExtArgs>
        fields: Prisma.ParkingSlotOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSlotOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSlotOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>
          }
          findFirst: {
            args: Prisma.ParkingSlotOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSlotOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>
          }
          findMany: {
            args: Prisma.ParkingSlotOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>[]
          }
          create: {
            args: Prisma.ParkingSlotOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>
          }
          createMany: {
            args: Prisma.ParkingSlotOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSlotOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>[]
          }
          delete: {
            args: Prisma.ParkingSlotOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>
          }
          update: {
            args: Prisma.ParkingSlotOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSlotOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSlotOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSlotOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSlotOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotOrderPayload>
          }
          aggregate: {
            args: Prisma.ParkingSlotOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSlotOrder>
          }
          groupBy: {
            args: Prisma.ParkingSlotOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSlotOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotOrderCountAggregateOutputType> | number
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
    user?: UserOmit
    vehicle?: VehicleOmit
    parking?: ParkingOmit
    parkingSlot?: ParkingSlotOmit
    parkingSlotOrder?: ParkingSlotOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    parkingSlotOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    parkingSlotOrders?: boolean | UserCountOutputTypeCountParkingSlotOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingSlotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotOrderWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    parkingSlotOrder: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlotOrder?: boolean | VehicleCountOutputTypeCountParkingSlotOrderArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountParkingSlotOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotOrderWhereInput
  }


  /**
   * Count Type ParkingCountOutputType
   */

  export type ParkingCountOutputType = {
    parkingSlots: number
  }

  export type ParkingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlots?: boolean | ParkingCountOutputTypeCountParkingSlotsArgs
  }

  // Custom InputTypes
  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingCountOutputType
     */
    select?: ParkingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeCountParkingSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
  }


  /**
   * Count Type ParkingSlotCountOutputType
   */

  export type ParkingSlotCountOutputType = {
    parkingSlotOrders: number
  }

  export type ParkingSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlotOrders?: boolean | ParkingSlotCountOutputTypeCountParkingSlotOrdersArgs
  }

  // Custom InputTypes
  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotCountOutputType
     */
    select?: ParkingSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountParkingSlotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotOrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    emailVerified: number
    emailVerificationToken: number
    emailVerificationTokenExpires: number
    resetPasswordToken: number
    resetPasswordTokenExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    emailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    parkingSlotOrders?: boolean | User$parkingSlotOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "createdAt" | "updatedAt" | "role" | "emailVerified" | "emailVerificationToken" | "emailVerificationTokenExpires" | "resetPasswordToken" | "resetPasswordTokenExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    parkingSlotOrders?: boolean | User$parkingSlotOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      parkingSlotOrders: Prisma.$ParkingSlotOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      emailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationTokenExpires: Date | null
      resetPasswordToken: string | null
      resetPasswordTokenExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingSlotOrders<T extends User$parkingSlotOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingSlotOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordTokenExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.parkingSlotOrders
   */
  export type User$parkingSlotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    where?: ParkingSlotOrderWhereInput
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    cursor?: ParkingSlotOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSlotOrderScalarFieldEnum | ParkingSlotOrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    vehicleYear: number | null
  }

  export type VehicleSumAggregateOutputType = {
    vehicleYear: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    vehiclePlateNumber: string | null
    vehicleType: $Enums.VehicleType | null
    vehicleColor: string | null
    vehicleBrand: string | null
    vehicleModel: string | null
    vehicleYear: number | null
    vehicleOwnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    vehiclePlateNumber: string | null
    vehicleType: $Enums.VehicleType | null
    vehicleColor: string | null
    vehicleBrand: string | null
    vehicleModel: string | null
    vehicleYear: number | null
    vehicleOwnerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vehiclePlateNumber: number
    vehicleType: number
    vehicleColor: number
    vehicleBrand: number
    vehicleModel: number
    vehicleYear: number
    vehicleOwnerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    vehicleYear?: true
  }

  export type VehicleSumAggregateInputType = {
    vehicleYear?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vehiclePlateNumber?: true
    vehicleType?: true
    vehicleColor?: true
    vehicleBrand?: true
    vehicleModel?: true
    vehicleYear?: true
    vehicleOwnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vehiclePlateNumber?: true
    vehicleType?: true
    vehicleColor?: true
    vehicleBrand?: true
    vehicleModel?: true
    vehicleYear?: true
    vehicleOwnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vehiclePlateNumber?: true
    vehicleType?: true
    vehicleColor?: true
    vehicleBrand?: true
    vehicleModel?: true
    vehicleYear?: true
    vehicleOwnerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    vehiclePlateNumber: string
    vehicleType: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
    parkingSlotOrder?: boolean | Vehicle$parkingSlotOrderArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    vehiclePlateNumber?: boolean
    vehicleType?: boolean
    vehicleColor?: boolean
    vehicleBrand?: boolean
    vehicleModel?: boolean
    vehicleYear?: boolean
    vehicleOwnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehiclePlateNumber" | "vehicleType" | "vehicleColor" | "vehicleBrand" | "vehicleModel" | "vehicleYear" | "vehicleOwnerId" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
    parkingSlotOrder?: boolean | Vehicle$parkingSlotOrderArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleOwner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      vehicleOwner: Prisma.$UserPayload<ExtArgs>
      parkingSlotOrder: Prisma.$ParkingSlotOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehiclePlateNumber: string
      vehicleType: $Enums.VehicleType
      vehicleColor: string
      vehicleBrand: string
      vehicleModel: string
      vehicleYear: number
      vehicleOwnerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicleOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSlotOrder<T extends Vehicle$parkingSlotOrderArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$parkingSlotOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly vehiclePlateNumber: FieldRef<"Vehicle", 'String'>
    readonly vehicleType: FieldRef<"Vehicle", 'VehicleType'>
    readonly vehicleColor: FieldRef<"Vehicle", 'String'>
    readonly vehicleBrand: FieldRef<"Vehicle", 'String'>
    readonly vehicleModel: FieldRef<"Vehicle", 'String'>
    readonly vehicleYear: FieldRef<"Vehicle", 'Int'>
    readonly vehicleOwnerId: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.parkingSlotOrder
   */
  export type Vehicle$parkingSlotOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    where?: ParkingSlotOrderWhereInput
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    cursor?: ParkingSlotOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSlotOrderScalarFieldEnum | ParkingSlotOrderScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Parking
   */

  export type AggregateParking = {
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  export type ParkingAvgAggregateOutputType = {
    maxSlots: number | null
    pricePerHour: number | null
  }

  export type ParkingSumAggregateOutputType = {
    maxSlots: number | null
    pricePerHour: number | null
  }

  export type ParkingMinAggregateOutputType = {
    id: string | null
    maxSlots: number | null
    slotCategory: $Enums.ParkingCategory | null
    pricePerHour: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingMaxAggregateOutputType = {
    id: string | null
    maxSlots: number | null
    slotCategory: $Enums.ParkingCategory | null
    pricePerHour: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingCountAggregateOutputType = {
    id: number
    maxSlots: number
    slotCategory: number
    pricePerHour: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingAvgAggregateInputType = {
    maxSlots?: true
    pricePerHour?: true
  }

  export type ParkingSumAggregateInputType = {
    maxSlots?: true
    pricePerHour?: true
  }

  export type ParkingMinAggregateInputType = {
    id?: true
    maxSlots?: true
    slotCategory?: true
    pricePerHour?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingMaxAggregateInputType = {
    id?: true
    maxSlots?: true
    slotCategory?: true
    pricePerHour?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingCountAggregateInputType = {
    id?: true
    maxSlots?: true
    slotCategory?: true
    pricePerHour?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parking to aggregate.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parkings
    **/
    _count?: true | ParkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingMaxAggregateInputType
  }

  export type GetParkingAggregateType<T extends ParkingAggregateArgs> = {
        [P in keyof T & keyof AggregateParking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking[P]>
      : GetScalarType<T[P], AggregateParking[P]>
  }




  export type ParkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithAggregationInput | ParkingOrderByWithAggregationInput[]
    by: ParkingScalarFieldEnum[] | ParkingScalarFieldEnum
    having?: ParkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingCountAggregateInputType | true
    _avg?: ParkingAvgAggregateInputType
    _sum?: ParkingSumAggregateInputType
    _min?: ParkingMinAggregateInputType
    _max?: ParkingMaxAggregateInputType
  }

  export type ParkingGroupByOutputType = {
    id: string
    maxSlots: number
    slotCategory: $Enums.ParkingCategory
    pricePerHour: number
    createdAt: Date
    updatedAt: Date
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  type GetParkingGroupByPayload<T extends ParkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxSlots?: boolean
    slotCategory?: boolean
    pricePerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSlots?: boolean | Parking$parkingSlotsArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxSlots?: boolean
    slotCategory?: boolean
    pricePerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxSlots?: boolean
    slotCategory?: boolean
    pricePerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectScalar = {
    id?: boolean
    maxSlots?: boolean
    slotCategory?: boolean
    pricePerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maxSlots" | "slotCategory" | "pricePerHour" | "createdAt" | "updatedAt", ExtArgs["result"]["parking"]>
  export type ParkingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlots?: boolean | Parking$parkingSlotsArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parking"
    objects: {
      parkingSlots: Prisma.$ParkingSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maxSlots: number
      slotCategory: $Enums.ParkingCategory
      pricePerHour: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parking"]>
    composites: {}
  }

  type ParkingGetPayload<S extends boolean | null | undefined | ParkingDefaultArgs> = $Result.GetResult<Prisma.$ParkingPayload, S>

  type ParkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingCountAggregateInputType | true
    }

  export interface ParkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parking'], meta: { name: 'Parking' } }
    /**
     * Find zero or one Parking that matches the filter.
     * @param {ParkingFindUniqueArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingFindUniqueArgs>(args: SelectSubset<T, ParkingFindUniqueArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingFindUniqueOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingFindFirstArgs>(args?: SelectSubset<T, ParkingFindFirstArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkings
     * const parkings = await prisma.parking.findMany()
     * 
     * // Get first 10 Parkings
     * const parkings = await prisma.parking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingWithIdOnly = await prisma.parking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingFindManyArgs>(args?: SelectSubset<T, ParkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parking.
     * @param {ParkingCreateArgs} args - Arguments to create a Parking.
     * @example
     * // Create one Parking
     * const Parking = await prisma.parking.create({
     *   data: {
     *     // ... data to create a Parking
     *   }
     * })
     * 
     */
    create<T extends ParkingCreateArgs>(args: SelectSubset<T, ParkingCreateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkings.
     * @param {ParkingCreateManyArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingCreateManyArgs>(args?: SelectSubset<T, ParkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parkings and returns the data saved in the database.
     * @param {ParkingCreateManyAndReturnArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parkings and only return the `id`
     * const parkingWithIdOnly = await prisma.parking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parking.
     * @param {ParkingDeleteArgs} args - Arguments to delete one Parking.
     * @example
     * // Delete one Parking
     * const Parking = await prisma.parking.delete({
     *   where: {
     *     // ... filter to delete one Parking
     *   }
     * })
     * 
     */
    delete<T extends ParkingDeleteArgs>(args: SelectSubset<T, ParkingDeleteArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parking.
     * @param {ParkingUpdateArgs} args - Arguments to update one Parking.
     * @example
     * // Update one Parking
     * const parking = await prisma.parking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingUpdateArgs>(args: SelectSubset<T, ParkingUpdateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkings.
     * @param {ParkingDeleteManyArgs} args - Arguments to filter Parkings to delete.
     * @example
     * // Delete a few Parkings
     * const { count } = await prisma.parking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingDeleteManyArgs>(args?: SelectSubset<T, ParkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingUpdateManyArgs>(args: SelectSubset<T, ParkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings and returns the data updated in the database.
     * @param {ParkingUpdateManyAndReturnArgs} args - Arguments to update many Parkings.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parkings and only return the `id`
     * const parkingWithIdOnly = await prisma.parking.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parking.
     * @param {ParkingUpsertArgs} args - Arguments to update or create a Parking.
     * @example
     * // Update or create a Parking
     * const parking = await prisma.parking.upsert({
     *   create: {
     *     // ... data to create a Parking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking we want to update
     *   }
     * })
     */
    upsert<T extends ParkingUpsertArgs>(args: SelectSubset<T, ParkingUpsertArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingCountArgs} args - Arguments to filter Parkings to count.
     * @example
     * // Count the number of Parkings
     * const count = await prisma.parking.count({
     *   where: {
     *     // ... the filter for the Parkings we want to count
     *   }
     * })
    **/
    count<T extends ParkingCountArgs>(
      args?: Subset<T, ParkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingAggregateArgs>(args: Subset<T, ParkingAggregateArgs>): Prisma.PrismaPromise<GetParkingAggregateType<T>>

    /**
     * Group by Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingGroupByArgs} args - Group by arguments.
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
      T extends ParkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingGroupByArgs['orderBy'] }
        : { orderBy?: ParkingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parking model
   */
  readonly fields: ParkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingSlots<T extends Parking$parkingSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Parking$parkingSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parking model
   */
  interface ParkingFieldRefs {
    readonly id: FieldRef<"Parking", 'String'>
    readonly maxSlots: FieldRef<"Parking", 'Int'>
    readonly slotCategory: FieldRef<"Parking", 'ParkingCategory'>
    readonly pricePerHour: FieldRef<"Parking", 'Float'>
    readonly createdAt: FieldRef<"Parking", 'DateTime'>
    readonly updatedAt: FieldRef<"Parking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parking findUnique
   */
  export type ParkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findUniqueOrThrow
   */
  export type ParkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findFirst
   */
  export type ParkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findFirstOrThrow
   */
  export type ParkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findMany
   */
  export type ParkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parkings to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking create
   */
  export type ParkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to create a Parking.
     */
    data: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
  }

  /**
   * Parking createMany
   */
  export type ParkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parking createManyAndReturn
   */
  export type ParkingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parking update
   */
  export type ParkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to update a Parking.
     */
    data: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
    /**
     * Choose, which Parking to update.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking updateMany
   */
  export type ParkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
  }

  /**
   * Parking updateManyAndReturn
   */
  export type ParkingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
  }

  /**
   * Parking upsert
   */
  export type ParkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The filter to search for the Parking to update in case it exists.
     */
    where: ParkingWhereUniqueInput
    /**
     * In case the Parking found by the `where` argument doesn't exist, create a new Parking with this data.
     */
    create: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
    /**
     * In case the Parking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
  }

  /**
   * Parking delete
   */
  export type ParkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter which Parking to delete.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking deleteMany
   */
  export type ParkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parkings to delete
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to delete.
     */
    limit?: number
  }

  /**
   * Parking.parkingSlots
   */
  export type Parking$parkingSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    cursor?: ParkingSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * Parking without action
   */
  export type ParkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSlot
   */

  export type AggregateParkingSlot = {
    _count: ParkingSlotCountAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  export type ParkingSlotMinAggregateOutputType = {
    id: string | null
    parkingId: string | null
    parkingSlotNumber: string | null
    parkingSlotSize: $Enums.ParkingSlotSize | null
    parkingSlotStatus: $Enums.ParkingSlotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotMaxAggregateOutputType = {
    id: string | null
    parkingId: string | null
    parkingSlotNumber: string | null
    parkingSlotSize: $Enums.ParkingSlotSize | null
    parkingSlotStatus: $Enums.ParkingSlotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotCountAggregateOutputType = {
    id: number
    parkingId: number
    parkingSlotNumber: number
    parkingSlotSize: number
    parkingSlotStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingSlotMinAggregateInputType = {
    id?: true
    parkingId?: true
    parkingSlotNumber?: true
    parkingSlotSize?: true
    parkingSlotStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotMaxAggregateInputType = {
    id?: true
    parkingId?: true
    parkingSlotNumber?: true
    parkingSlotSize?: true
    parkingSlotStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotCountAggregateInputType = {
    id?: true
    parkingId?: true
    parkingSlotNumber?: true
    parkingSlotSize?: true
    parkingSlotStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlot to aggregate.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSlots
    **/
    _count?: true | ParkingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type GetParkingSlotAggregateType<T extends ParkingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSlot[P]>
      : GetScalarType<T[P], AggregateParkingSlot[P]>
  }




  export type ParkingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithAggregationInput | ParkingSlotOrderByWithAggregationInput[]
    by: ParkingSlotScalarFieldEnum[] | ParkingSlotScalarFieldEnum
    having?: ParkingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSlotCountAggregateInputType | true
    _min?: ParkingSlotMinAggregateInputType
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type ParkingSlotGroupByOutputType = {
    id: string
    parkingId: string
    parkingSlotNumber: string
    parkingSlotSize: $Enums.ParkingSlotSize
    parkingSlotStatus: $Enums.ParkingSlotStatus
    createdAt: Date
    updatedAt: Date
    _count: ParkingSlotCountAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  type GetParkingSlotGroupByPayload<T extends ParkingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingId?: boolean
    parkingSlotNumber?: boolean
    parkingSlotSize?: boolean
    parkingSlotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
    parkingSlotOrders?: boolean | ParkingSlot$parkingSlotOrdersArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingId?: boolean
    parkingSlotNumber?: boolean
    parkingSlotSize?: boolean
    parkingSlotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingId?: boolean
    parkingSlotNumber?: boolean
    parkingSlotSize?: boolean
    parkingSlotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectScalar = {
    id?: boolean
    parkingId?: boolean
    parkingSlotNumber?: boolean
    parkingSlotSize?: boolean
    parkingSlotStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parkingId" | "parkingSlotNumber" | "parkingSlotSize" | "parkingSlotStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingSlot"]>
  export type ParkingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
    parkingSlotOrders?: boolean | ParkingSlot$parkingSlotOrdersArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }

  export type $ParkingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSlot"
    objects: {
      parking: Prisma.$ParkingPayload<ExtArgs>
      parkingSlotOrders: Prisma.$ParkingSlotOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parkingId: string
      parkingSlotNumber: string
      parkingSlotSize: $Enums.ParkingSlotSize
      parkingSlotStatus: $Enums.ParkingSlotStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingSlot"]>
    composites: {}
  }

  type ParkingSlotGetPayload<S extends boolean | null | undefined | ParkingSlotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSlotPayload, S>

  type ParkingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSlotCountAggregateInputType | true
    }

  export interface ParkingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSlot'], meta: { name: 'ParkingSlot' } }
    /**
     * Find zero or one ParkingSlot that matches the filter.
     * @param {ParkingSlotFindUniqueArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSlotFindUniqueArgs>(args: SelectSubset<T, ParkingSlotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSlotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSlotFindFirstArgs>(args?: SelectSubset<T, ParkingSlotFindFirstArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany()
     * 
     * // Get first 10 ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSlotFindManyArgs>(args?: SelectSubset<T, ParkingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSlot.
     * @param {ParkingSlotCreateArgs} args - Arguments to create a ParkingSlot.
     * @example
     * // Create one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.create({
     *   data: {
     *     // ... data to create a ParkingSlot
     *   }
     * })
     * 
     */
    create<T extends ParkingSlotCreateArgs>(args: SelectSubset<T, ParkingSlotCreateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSlots.
     * @param {ParkingSlotCreateManyArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSlotCreateManyArgs>(args?: SelectSubset<T, ParkingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSlots and returns the data saved in the database.
     * @param {ParkingSlotCreateManyAndReturnArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSlot.
     * @param {ParkingSlotDeleteArgs} args - Arguments to delete one ParkingSlot.
     * @example
     * // Delete one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSlot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSlotDeleteArgs>(args: SelectSubset<T, ParkingSlotDeleteArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSlot.
     * @param {ParkingSlotUpdateArgs} args - Arguments to update one ParkingSlot.
     * @example
     * // Update one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSlotUpdateArgs>(args: SelectSubset<T, ParkingSlotUpdateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSlots.
     * @param {ParkingSlotDeleteManyArgs} args - Arguments to filter ParkingSlots to delete.
     * @example
     * // Delete a few ParkingSlots
     * const { count } = await prisma.parkingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSlotDeleteManyArgs>(args?: SelectSubset<T, ParkingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSlotUpdateManyArgs>(args: SelectSubset<T, ParkingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots and returns the data updated in the database.
     * @param {ParkingSlotUpdateManyAndReturnArgs} args - Arguments to update many ParkingSlots.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSlot.
     * @param {ParkingSlotUpsertArgs} args - Arguments to update or create a ParkingSlot.
     * @example
     * // Update or create a ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.upsert({
     *   create: {
     *     // ... data to create a ParkingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSlot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSlotUpsertArgs>(args: SelectSubset<T, ParkingSlotUpsertArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotCountArgs} args - Arguments to filter ParkingSlots to count.
     * @example
     * // Count the number of ParkingSlots
     * const count = await prisma.parkingSlot.count({
     *   where: {
     *     // ... the filter for the ParkingSlots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSlotCountArgs>(
      args?: Subset<T, ParkingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSlotAggregateArgs>(args: Subset<T, ParkingSlotAggregateArgs>): Prisma.PrismaPromise<GetParkingSlotAggregateType<T>>

    /**
     * Group by ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotGroupByArgs} args - Group by arguments.
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
      T extends ParkingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSlotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSlot model
   */
  readonly fields: ParkingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parking<T extends ParkingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingDefaultArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSlotOrders<T extends ParkingSlot$parkingSlotOrdersArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$parkingSlotOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ParkingSlot model
   */
  interface ParkingSlotFieldRefs {
    readonly id: FieldRef<"ParkingSlot", 'String'>
    readonly parkingId: FieldRef<"ParkingSlot", 'String'>
    readonly parkingSlotNumber: FieldRef<"ParkingSlot", 'String'>
    readonly parkingSlotSize: FieldRef<"ParkingSlot", 'ParkingSlotSize'>
    readonly parkingSlotStatus: FieldRef<"ParkingSlot", 'ParkingSlotStatus'>
    readonly createdAt: FieldRef<"ParkingSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSlot findUnique
   */
  export type ParkingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findUniqueOrThrow
   */
  export type ParkingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findFirst
   */
  export type ParkingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findFirstOrThrow
   */
  export type ParkingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findMany
   */
  export type ParkingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlots to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot create
   */
  export type ParkingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSlot.
     */
    data: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
  }

  /**
   * ParkingSlot createMany
   */
  export type ParkingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot createManyAndReturn
   */
  export type ParkingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlot update
   */
  export type ParkingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSlot.
     */
    data: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSlot to update.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot updateMany
   */
  export type ParkingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot updateManyAndReturn
   */
  export type ParkingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlot upsert
   */
  export type ParkingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSlot to update in case it exists.
     */
    where: ParkingSlotWhereUniqueInput
    /**
     * In case the ParkingSlot found by the `where` argument doesn't exist, create a new ParkingSlot with this data.
     */
    create: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
    /**
     * In case the ParkingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
  }

  /**
   * ParkingSlot delete
   */
  export type ParkingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSlot to delete.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot deleteMany
   */
  export type ParkingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlots to delete
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to delete.
     */
    limit?: number
  }

  /**
   * ParkingSlot.parkingSlotOrders
   */
  export type ParkingSlot$parkingSlotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    where?: ParkingSlotOrderWhereInput
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    cursor?: ParkingSlotOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSlotOrderScalarFieldEnum | ParkingSlotOrderScalarFieldEnum[]
  }

  /**
   * ParkingSlot without action
   */
  export type ParkingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSlotOrder
   */

  export type AggregateParkingSlotOrder = {
    _count: ParkingSlotOrderCountAggregateOutputType | null
    _avg: ParkingSlotOrderAvgAggregateOutputType | null
    _sum: ParkingSlotOrderSumAggregateOutputType | null
    _min: ParkingSlotOrderMinAggregateOutputType | null
    _max: ParkingSlotOrderMaxAggregateOutputType | null
  }

  export type ParkingSlotOrderAvgAggregateOutputType = {
    pricePerHour: number | null
    hours: number | null
  }

  export type ParkingSlotOrderSumAggregateOutputType = {
    pricePerHour: number | null
    hours: number | null
  }

  export type ParkingSlotOrderMinAggregateOutputType = {
    id: string | null
    parkingSlotId: string | null
    vehicleId: string | null
    parkingSlotCustomerId: string | null
    parkingSlotVehicleId: string | null
    pricePerHour: number | null
    hours: number | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingSlotOrderStatus: $Enums.ParkingSlotOrderStatus | null
  }

  export type ParkingSlotOrderMaxAggregateOutputType = {
    id: string | null
    parkingSlotId: string | null
    vehicleId: string | null
    parkingSlotCustomerId: string | null
    parkingSlotVehicleId: string | null
    pricePerHour: number | null
    hours: number | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingSlotOrderStatus: $Enums.ParkingSlotOrderStatus | null
  }

  export type ParkingSlotOrderCountAggregateOutputType = {
    id: number
    parkingSlotId: number
    vehicleId: number
    parkingSlotCustomerId: number
    parkingSlotVehicleId: number
    pricePerHour: number
    hours: number
    createdAt: number
    updatedAt: number
    parkingSlotOrderStatus: number
    _all: number
  }


  export type ParkingSlotOrderAvgAggregateInputType = {
    pricePerHour?: true
    hours?: true
  }

  export type ParkingSlotOrderSumAggregateInputType = {
    pricePerHour?: true
    hours?: true
  }

  export type ParkingSlotOrderMinAggregateInputType = {
    id?: true
    parkingSlotId?: true
    vehicleId?: true
    parkingSlotCustomerId?: true
    parkingSlotVehicleId?: true
    pricePerHour?: true
    hours?: true
    createdAt?: true
    updatedAt?: true
    parkingSlotOrderStatus?: true
  }

  export type ParkingSlotOrderMaxAggregateInputType = {
    id?: true
    parkingSlotId?: true
    vehicleId?: true
    parkingSlotCustomerId?: true
    parkingSlotVehicleId?: true
    pricePerHour?: true
    hours?: true
    createdAt?: true
    updatedAt?: true
    parkingSlotOrderStatus?: true
  }

  export type ParkingSlotOrderCountAggregateInputType = {
    id?: true
    parkingSlotId?: true
    vehicleId?: true
    parkingSlotCustomerId?: true
    parkingSlotVehicleId?: true
    pricePerHour?: true
    hours?: true
    createdAt?: true
    updatedAt?: true
    parkingSlotOrderStatus?: true
    _all?: true
  }

  export type ParkingSlotOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlotOrder to aggregate.
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlotOrders to fetch.
     */
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlotOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSlotOrders
    **/
    _count?: true | ParkingSlotOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSlotOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSlotOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSlotOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSlotOrderMaxAggregateInputType
  }

  export type GetParkingSlotOrderAggregateType<T extends ParkingSlotOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSlotOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSlotOrder[P]>
      : GetScalarType<T[P], AggregateParkingSlotOrder[P]>
  }




  export type ParkingSlotOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotOrderWhereInput
    orderBy?: ParkingSlotOrderOrderByWithAggregationInput | ParkingSlotOrderOrderByWithAggregationInput[]
    by: ParkingSlotOrderScalarFieldEnum[] | ParkingSlotOrderScalarFieldEnum
    having?: ParkingSlotOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSlotOrderCountAggregateInputType | true
    _avg?: ParkingSlotOrderAvgAggregateInputType
    _sum?: ParkingSlotOrderSumAggregateInputType
    _min?: ParkingSlotOrderMinAggregateInputType
    _max?: ParkingSlotOrderMaxAggregateInputType
  }

  export type ParkingSlotOrderGroupByOutputType = {
    id: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotCustomerId: string | null
    parkingSlotVehicleId: string | null
    pricePerHour: number
    hours: number
    createdAt: Date
    updatedAt: Date
    parkingSlotOrderStatus: $Enums.ParkingSlotOrderStatus
    _count: ParkingSlotOrderCountAggregateOutputType | null
    _avg: ParkingSlotOrderAvgAggregateOutputType | null
    _sum: ParkingSlotOrderSumAggregateOutputType | null
    _min: ParkingSlotOrderMinAggregateOutputType | null
    _max: ParkingSlotOrderMaxAggregateOutputType | null
  }

  type GetParkingSlotOrderGroupByPayload<T extends ParkingSlotOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSlotOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSlotOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSlotOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSlotOrderGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSlotOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingSlotId?: boolean
    vehicleId?: boolean
    parkingSlotCustomerId?: boolean
    parkingSlotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSlotOrderStatus?: boolean
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSlotCustomer?: boolean | ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>
    parkingSlotVehicle?: boolean | ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlotOrder"]>

  export type ParkingSlotOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingSlotId?: boolean
    vehicleId?: boolean
    parkingSlotCustomerId?: boolean
    parkingSlotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSlotOrderStatus?: boolean
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSlotCustomer?: boolean | ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>
    parkingSlotVehicle?: boolean | ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlotOrder"]>

  export type ParkingSlotOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingSlotId?: boolean
    vehicleId?: boolean
    parkingSlotCustomerId?: boolean
    parkingSlotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSlotOrderStatus?: boolean
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSlotCustomer?: boolean | ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>
    parkingSlotVehicle?: boolean | ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlotOrder"]>

  export type ParkingSlotOrderSelectScalar = {
    id?: boolean
    parkingSlotId?: boolean
    vehicleId?: boolean
    parkingSlotCustomerId?: boolean
    parkingSlotVehicleId?: boolean
    pricePerHour?: boolean
    hours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSlotOrderStatus?: boolean
  }

  export type ParkingSlotOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parkingSlotId" | "vehicleId" | "parkingSlotCustomerId" | "parkingSlotVehicleId" | "pricePerHour" | "hours" | "createdAt" | "updatedAt" | "parkingSlotOrderStatus", ExtArgs["result"]["parkingSlotOrder"]>
  export type ParkingSlotOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSlotCustomer?: boolean | ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>
    parkingSlotVehicle?: boolean | ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>
  }
  export type ParkingSlotOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSlotCustomer?: boolean | ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>
    parkingSlotVehicle?: boolean | ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>
  }
  export type ParkingSlotOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingSlotCustomer?: boolean | ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>
    parkingSlotVehicle?: boolean | ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>
  }

  export type $ParkingSlotOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSlotOrder"
    objects: {
      parkingSlot: Prisma.$ParkingSlotPayload<ExtArgs>
      parkingSlotCustomer: Prisma.$UserPayload<ExtArgs> | null
      parkingSlotVehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parkingSlotId: string
      vehicleId: string
      parkingSlotCustomerId: string | null
      parkingSlotVehicleId: string | null
      pricePerHour: number
      hours: number
      createdAt: Date
      updatedAt: Date
      parkingSlotOrderStatus: $Enums.ParkingSlotOrderStatus
    }, ExtArgs["result"]["parkingSlotOrder"]>
    composites: {}
  }

  type ParkingSlotOrderGetPayload<S extends boolean | null | undefined | ParkingSlotOrderDefaultArgs> = $Result.GetResult<Prisma.$ParkingSlotOrderPayload, S>

  type ParkingSlotOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSlotOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSlotOrderCountAggregateInputType | true
    }

  export interface ParkingSlotOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSlotOrder'], meta: { name: 'ParkingSlotOrder' } }
    /**
     * Find zero or one ParkingSlotOrder that matches the filter.
     * @param {ParkingSlotOrderFindUniqueArgs} args - Arguments to find a ParkingSlotOrder
     * @example
     * // Get one ParkingSlotOrder
     * const parkingSlotOrder = await prisma.parkingSlotOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSlotOrderFindUniqueArgs>(args: SelectSubset<T, ParkingSlotOrderFindUniqueArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSlotOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSlotOrderFindUniqueOrThrowArgs} args - Arguments to find a ParkingSlotOrder
     * @example
     * // Get one ParkingSlotOrder
     * const parkingSlotOrder = await prisma.parkingSlotOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSlotOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSlotOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlotOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderFindFirstArgs} args - Arguments to find a ParkingSlotOrder
     * @example
     * // Get one ParkingSlotOrder
     * const parkingSlotOrder = await prisma.parkingSlotOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSlotOrderFindFirstArgs>(args?: SelectSubset<T, ParkingSlotOrderFindFirstArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlotOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderFindFirstOrThrowArgs} args - Arguments to find a ParkingSlotOrder
     * @example
     * // Get one ParkingSlotOrder
     * const parkingSlotOrder = await prisma.parkingSlotOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSlotOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSlotOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSlotOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSlotOrders
     * const parkingSlotOrders = await prisma.parkingSlotOrder.findMany()
     * 
     * // Get first 10 ParkingSlotOrders
     * const parkingSlotOrders = await prisma.parkingSlotOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSlotOrderWithIdOnly = await prisma.parkingSlotOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSlotOrderFindManyArgs>(args?: SelectSubset<T, ParkingSlotOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSlotOrder.
     * @param {ParkingSlotOrderCreateArgs} args - Arguments to create a ParkingSlotOrder.
     * @example
     * // Create one ParkingSlotOrder
     * const ParkingSlotOrder = await prisma.parkingSlotOrder.create({
     *   data: {
     *     // ... data to create a ParkingSlotOrder
     *   }
     * })
     * 
     */
    create<T extends ParkingSlotOrderCreateArgs>(args: SelectSubset<T, ParkingSlotOrderCreateArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSlotOrders.
     * @param {ParkingSlotOrderCreateManyArgs} args - Arguments to create many ParkingSlotOrders.
     * @example
     * // Create many ParkingSlotOrders
     * const parkingSlotOrder = await prisma.parkingSlotOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSlotOrderCreateManyArgs>(args?: SelectSubset<T, ParkingSlotOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSlotOrders and returns the data saved in the database.
     * @param {ParkingSlotOrderCreateManyAndReturnArgs} args - Arguments to create many ParkingSlotOrders.
     * @example
     * // Create many ParkingSlotOrders
     * const parkingSlotOrder = await prisma.parkingSlotOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSlotOrders and only return the `id`
     * const parkingSlotOrderWithIdOnly = await prisma.parkingSlotOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSlotOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSlotOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSlotOrder.
     * @param {ParkingSlotOrderDeleteArgs} args - Arguments to delete one ParkingSlotOrder.
     * @example
     * // Delete one ParkingSlotOrder
     * const ParkingSlotOrder = await prisma.parkingSlotOrder.delete({
     *   where: {
     *     // ... filter to delete one ParkingSlotOrder
     *   }
     * })
     * 
     */
    delete<T extends ParkingSlotOrderDeleteArgs>(args: SelectSubset<T, ParkingSlotOrderDeleteArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSlotOrder.
     * @param {ParkingSlotOrderUpdateArgs} args - Arguments to update one ParkingSlotOrder.
     * @example
     * // Update one ParkingSlotOrder
     * const parkingSlotOrder = await prisma.parkingSlotOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSlotOrderUpdateArgs>(args: SelectSubset<T, ParkingSlotOrderUpdateArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSlotOrders.
     * @param {ParkingSlotOrderDeleteManyArgs} args - Arguments to filter ParkingSlotOrders to delete.
     * @example
     * // Delete a few ParkingSlotOrders
     * const { count } = await prisma.parkingSlotOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSlotOrderDeleteManyArgs>(args?: SelectSubset<T, ParkingSlotOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlotOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSlotOrders
     * const parkingSlotOrder = await prisma.parkingSlotOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSlotOrderUpdateManyArgs>(args: SelectSubset<T, ParkingSlotOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlotOrders and returns the data updated in the database.
     * @param {ParkingSlotOrderUpdateManyAndReturnArgs} args - Arguments to update many ParkingSlotOrders.
     * @example
     * // Update many ParkingSlotOrders
     * const parkingSlotOrder = await prisma.parkingSlotOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSlotOrders and only return the `id`
     * const parkingSlotOrderWithIdOnly = await prisma.parkingSlotOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingSlotOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSlotOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSlotOrder.
     * @param {ParkingSlotOrderUpsertArgs} args - Arguments to update or create a ParkingSlotOrder.
     * @example
     * // Update or create a ParkingSlotOrder
     * const parkingSlotOrder = await prisma.parkingSlotOrder.upsert({
     *   create: {
     *     // ... data to create a ParkingSlotOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSlotOrder we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSlotOrderUpsertArgs>(args: SelectSubset<T, ParkingSlotOrderUpsertArgs<ExtArgs>>): Prisma__ParkingSlotOrderClient<$Result.GetResult<Prisma.$ParkingSlotOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSlotOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderCountArgs} args - Arguments to filter ParkingSlotOrders to count.
     * @example
     * // Count the number of ParkingSlotOrders
     * const count = await prisma.parkingSlotOrder.count({
     *   where: {
     *     // ... the filter for the ParkingSlotOrders we want to count
     *   }
     * })
    **/
    count<T extends ParkingSlotOrderCountArgs>(
      args?: Subset<T, ParkingSlotOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSlotOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSlotOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSlotOrderAggregateArgs>(args: Subset<T, ParkingSlotOrderAggregateArgs>): Prisma.PrismaPromise<GetParkingSlotOrderAggregateType<T>>

    /**
     * Group by ParkingSlotOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotOrderGroupByArgs} args - Group by arguments.
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
      T extends ParkingSlotOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSlotOrderGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSlotOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSlotOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSlotOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSlotOrder model
   */
  readonly fields: ParkingSlotOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSlotOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSlotOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingSlot<T extends ParkingSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotDefaultArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSlotCustomer<T extends ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parkingSlotVehicle<T extends ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParkingSlotOrder model
   */
  interface ParkingSlotOrderFieldRefs {
    readonly id: FieldRef<"ParkingSlotOrder", 'String'>
    readonly parkingSlotId: FieldRef<"ParkingSlotOrder", 'String'>
    readonly vehicleId: FieldRef<"ParkingSlotOrder", 'String'>
    readonly parkingSlotCustomerId: FieldRef<"ParkingSlotOrder", 'String'>
    readonly parkingSlotVehicleId: FieldRef<"ParkingSlotOrder", 'String'>
    readonly pricePerHour: FieldRef<"ParkingSlotOrder", 'Float'>
    readonly hours: FieldRef<"ParkingSlotOrder", 'Int'>
    readonly createdAt: FieldRef<"ParkingSlotOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSlotOrder", 'DateTime'>
    readonly parkingSlotOrderStatus: FieldRef<"ParkingSlotOrder", 'ParkingSlotOrderStatus'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSlotOrder findUnique
   */
  export type ParkingSlotOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlotOrder to fetch.
     */
    where: ParkingSlotOrderWhereUniqueInput
  }

  /**
   * ParkingSlotOrder findUniqueOrThrow
   */
  export type ParkingSlotOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlotOrder to fetch.
     */
    where: ParkingSlotOrderWhereUniqueInput
  }

  /**
   * ParkingSlotOrder findFirst
   */
  export type ParkingSlotOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlotOrder to fetch.
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlotOrders to fetch.
     */
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlotOrders.
     */
    cursor?: ParkingSlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlotOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlotOrders.
     */
    distinct?: ParkingSlotOrderScalarFieldEnum | ParkingSlotOrderScalarFieldEnum[]
  }

  /**
   * ParkingSlotOrder findFirstOrThrow
   */
  export type ParkingSlotOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlotOrder to fetch.
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlotOrders to fetch.
     */
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlotOrders.
     */
    cursor?: ParkingSlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlotOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlotOrders.
     */
    distinct?: ParkingSlotOrderScalarFieldEnum | ParkingSlotOrderScalarFieldEnum[]
  }

  /**
   * ParkingSlotOrder findMany
   */
  export type ParkingSlotOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlotOrders to fetch.
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlotOrders to fetch.
     */
    orderBy?: ParkingSlotOrderOrderByWithRelationInput | ParkingSlotOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSlotOrders.
     */
    cursor?: ParkingSlotOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlotOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlotOrders.
     */
    skip?: number
    distinct?: ParkingSlotOrderScalarFieldEnum | ParkingSlotOrderScalarFieldEnum[]
  }

  /**
   * ParkingSlotOrder create
   */
  export type ParkingSlotOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSlotOrder.
     */
    data: XOR<ParkingSlotOrderCreateInput, ParkingSlotOrderUncheckedCreateInput>
  }

  /**
   * ParkingSlotOrder createMany
   */
  export type ParkingSlotOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSlotOrders.
     */
    data: ParkingSlotOrderCreateManyInput | ParkingSlotOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlotOrder createManyAndReturn
   */
  export type ParkingSlotOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSlotOrders.
     */
    data: ParkingSlotOrderCreateManyInput | ParkingSlotOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlotOrder update
   */
  export type ParkingSlotOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSlotOrder.
     */
    data: XOR<ParkingSlotOrderUpdateInput, ParkingSlotOrderUncheckedUpdateInput>
    /**
     * Choose, which ParkingSlotOrder to update.
     */
    where: ParkingSlotOrderWhereUniqueInput
  }

  /**
   * ParkingSlotOrder updateMany
   */
  export type ParkingSlotOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSlotOrders.
     */
    data: XOR<ParkingSlotOrderUpdateManyMutationInput, ParkingSlotOrderUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlotOrders to update
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * Limit how many ParkingSlotOrders to update.
     */
    limit?: number
  }

  /**
   * ParkingSlotOrder updateManyAndReturn
   */
  export type ParkingSlotOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSlotOrders.
     */
    data: XOR<ParkingSlotOrderUpdateManyMutationInput, ParkingSlotOrderUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlotOrders to update
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * Limit how many ParkingSlotOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlotOrder upsert
   */
  export type ParkingSlotOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSlotOrder to update in case it exists.
     */
    where: ParkingSlotOrderWhereUniqueInput
    /**
     * In case the ParkingSlotOrder found by the `where` argument doesn't exist, create a new ParkingSlotOrder with this data.
     */
    create: XOR<ParkingSlotOrderCreateInput, ParkingSlotOrderUncheckedCreateInput>
    /**
     * In case the ParkingSlotOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSlotOrderUpdateInput, ParkingSlotOrderUncheckedUpdateInput>
  }

  /**
   * ParkingSlotOrder delete
   */
  export type ParkingSlotOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
    /**
     * Filter which ParkingSlotOrder to delete.
     */
    where: ParkingSlotOrderWhereUniqueInput
  }

  /**
   * ParkingSlotOrder deleteMany
   */
  export type ParkingSlotOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlotOrders to delete
     */
    where?: ParkingSlotOrderWhereInput
    /**
     * Limit how many ParkingSlotOrders to delete.
     */
    limit?: number
  }

  /**
   * ParkingSlotOrder.parkingSlotCustomer
   */
  export type ParkingSlotOrder$parkingSlotCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ParkingSlotOrder.parkingSlotVehicle
   */
  export type ParkingSlotOrder$parkingSlotVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * ParkingSlotOrder without action
   */
  export type ParkingSlotOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotOrder
     */
    select?: ParkingSlotOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlotOrder
     */
    omit?: ParkingSlotOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    emailVerified: 'emailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpires: 'emailVerificationTokenExpires',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpires: 'resetPasswordTokenExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vehiclePlateNumber: 'vehiclePlateNumber',
    vehicleType: 'vehicleType',
    vehicleColor: 'vehicleColor',
    vehicleBrand: 'vehicleBrand',
    vehicleModel: 'vehicleModel',
    vehicleYear: 'vehicleYear',
    vehicleOwnerId: 'vehicleOwnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ParkingScalarFieldEnum: {
    id: 'id',
    maxSlots: 'maxSlots',
    slotCategory: 'slotCategory',
    pricePerHour: 'pricePerHour',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingScalarFieldEnum = (typeof ParkingScalarFieldEnum)[keyof typeof ParkingScalarFieldEnum]


  export const ParkingSlotScalarFieldEnum: {
    id: 'id',
    parkingId: 'parkingId',
    parkingSlotNumber: 'parkingSlotNumber',
    parkingSlotSize: 'parkingSlotSize',
    parkingSlotStatus: 'parkingSlotStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingSlotScalarFieldEnum = (typeof ParkingSlotScalarFieldEnum)[keyof typeof ParkingSlotScalarFieldEnum]


  export const ParkingSlotOrderScalarFieldEnum: {
    id: 'id',
    parkingSlotId: 'parkingSlotId',
    vehicleId: 'vehicleId',
    parkingSlotCustomerId: 'parkingSlotCustomerId',
    parkingSlotVehicleId: 'parkingSlotVehicleId',
    pricePerHour: 'pricePerHour',
    hours: 'hours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parkingSlotOrderStatus: 'parkingSlotOrderStatus'
  };

  export type ParkingSlotOrderScalarFieldEnum = (typeof ParkingSlotOrderScalarFieldEnum)[keyof typeof ParkingSlotOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ParkingCategory'
   */
  export type EnumParkingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingCategory'>
    


  /**
   * Reference to a field of type 'ParkingCategory[]'
   */
  export type ListEnumParkingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ParkingSlotSize'
   */
  export type EnumParkingSlotSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSlotSize'>
    


  /**
   * Reference to a field of type 'ParkingSlotSize[]'
   */
  export type ListEnumParkingSlotSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSlotSize[]'>
    


  /**
   * Reference to a field of type 'ParkingSlotStatus'
   */
  export type EnumParkingSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSlotStatus'>
    


  /**
   * Reference to a field of type 'ParkingSlotStatus[]'
   */
  export type ListEnumParkingSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSlotStatus[]'>
    


  /**
   * Reference to a field of type 'ParkingSlotOrderStatus'
   */
  export type EnumParkingSlotOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSlotOrderStatus'>
    


  /**
   * Reference to a field of type 'ParkingSlotOrderStatus[]'
   */
  export type ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParkingSlotOrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    vehicles?: VehicleListRelationFilter
    parkingSlotOrders?: ParkingSlotOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    parkingSlotOrders?: ParkingSlotOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    vehicles?: VehicleListRelationFilter
    parkingSlotOrders?: ParkingSlotOrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehiclePlateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringFilter<"Vehicle"> | string
    vehicleBrand?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    vehicleYear?: IntFilter<"Vehicle"> | number
    vehicleOwnerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    vehicleOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingSlotOrder?: ParkingSlotOrderListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleOwner?: UserOrderByWithRelationInput
    parkingSlotOrder?: ParkingSlotOrderOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehiclePlateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringFilter<"Vehicle"> | string
    vehicleBrand?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    vehicleYear?: IntFilter<"Vehicle"> | number
    vehicleOwnerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    vehicleOwner?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingSlotOrder?: ParkingSlotOrderListRelationFilter
  }, "id" | "vehiclePlateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    vehiclePlateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleBrand?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleModel?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleYear?: IntWithAggregatesFilter<"Vehicle"> | number
    vehicleOwnerId?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type ParkingWhereInput = {
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    id?: StringFilter<"Parking"> | string
    maxSlots?: IntFilter<"Parking"> | number
    slotCategory?: EnumParkingCategoryFilter<"Parking"> | $Enums.ParkingCategory
    pricePerHour?: FloatFilter<"Parking"> | number
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
    parkingSlots?: ParkingSlotListRelationFilter
  }

  export type ParkingOrderByWithRelationInput = {
    id?: SortOrder
    maxSlots?: SortOrder
    slotCategory?: SortOrder
    pricePerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSlots?: ParkingSlotOrderByRelationAggregateInput
  }

  export type ParkingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    maxSlots?: IntFilter<"Parking"> | number
    slotCategory?: EnumParkingCategoryFilter<"Parking"> | $Enums.ParkingCategory
    pricePerHour?: FloatFilter<"Parking"> | number
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
    parkingSlots?: ParkingSlotListRelationFilter
  }, "id">

  export type ParkingOrderByWithAggregationInput = {
    id?: SortOrder
    maxSlots?: SortOrder
    slotCategory?: SortOrder
    pricePerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingCountOrderByAggregateInput
    _avg?: ParkingAvgOrderByAggregateInput
    _max?: ParkingMaxOrderByAggregateInput
    _min?: ParkingMinOrderByAggregateInput
    _sum?: ParkingSumOrderByAggregateInput
  }

  export type ParkingScalarWhereWithAggregatesInput = {
    AND?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    OR?: ParkingScalarWhereWithAggregatesInput[]
    NOT?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parking"> | string
    maxSlots?: IntWithAggregatesFilter<"Parking"> | number
    slotCategory?: EnumParkingCategoryWithAggregatesFilter<"Parking"> | $Enums.ParkingCategory
    pricePerHour?: FloatWithAggregatesFilter<"Parking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Parking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parking"> | Date | string
  }

  export type ParkingSlotWhereInput = {
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    parkingId?: StringFilter<"ParkingSlot"> | string
    parkingSlotNumber?: StringFilter<"ParkingSlot"> | string
    parkingSlotSize?: EnumParkingSlotSizeFilter<"ParkingSlot"> | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFilter<"ParkingSlot"> | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    parking?: XOR<ParkingScalarRelationFilter, ParkingWhereInput>
    parkingSlotOrders?: ParkingSlotOrderListRelationFilter
  }

  export type ParkingSlotOrderByWithRelationInput = {
    id?: SortOrder
    parkingId?: SortOrder
    parkingSlotNumber?: SortOrder
    parkingSlotSize?: SortOrder
    parkingSlotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parking?: ParkingOrderByWithRelationInput
    parkingSlotOrders?: ParkingSlotOrderOrderByRelationAggregateInput
  }

  export type ParkingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    parkingId?: StringFilter<"ParkingSlot"> | string
    parkingSlotNumber?: StringFilter<"ParkingSlot"> | string
    parkingSlotSize?: EnumParkingSlotSizeFilter<"ParkingSlot"> | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFilter<"ParkingSlot"> | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    parking?: XOR<ParkingScalarRelationFilter, ParkingWhereInput>
    parkingSlotOrders?: ParkingSlotOrderListRelationFilter
  }, "id">

  export type ParkingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    parkingId?: SortOrder
    parkingSlotNumber?: SortOrder
    parkingSlotSize?: SortOrder
    parkingSlotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingSlotCountOrderByAggregateInput
    _max?: ParkingSlotMaxOrderByAggregateInput
    _min?: ParkingSlotMinOrderByAggregateInput
  }

  export type ParkingSlotScalarWhereWithAggregatesInput = {
    AND?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    OR?: ParkingSlotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingSlot"> | string
    parkingId?: StringWithAggregatesFilter<"ParkingSlot"> | string
    parkingSlotNumber?: StringWithAggregatesFilter<"ParkingSlot"> | string
    parkingSlotSize?: EnumParkingSlotSizeWithAggregatesFilter<"ParkingSlot"> | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusWithAggregatesFilter<"ParkingSlot"> | $Enums.ParkingSlotStatus
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
  }

  export type ParkingSlotOrderWhereInput = {
    AND?: ParkingSlotOrderWhereInput | ParkingSlotOrderWhereInput[]
    OR?: ParkingSlotOrderWhereInput[]
    NOT?: ParkingSlotOrderWhereInput | ParkingSlotOrderWhereInput[]
    id?: StringFilter<"ParkingSlotOrder"> | string
    parkingSlotId?: StringFilter<"ParkingSlotOrder"> | string
    vehicleId?: StringFilter<"ParkingSlotOrder"> | string
    parkingSlotCustomerId?: StringNullableFilter<"ParkingSlotOrder"> | string | null
    parkingSlotVehicleId?: StringNullableFilter<"ParkingSlotOrder"> | string | null
    pricePerHour?: FloatFilter<"ParkingSlotOrder"> | number
    hours?: IntFilter<"ParkingSlotOrder"> | number
    createdAt?: DateTimeFilter<"ParkingSlotOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlotOrder"> | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFilter<"ParkingSlotOrder"> | $Enums.ParkingSlotOrderStatus
    parkingSlot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    parkingSlotCustomer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    parkingSlotVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }

  export type ParkingSlotOrderOrderByWithRelationInput = {
    id?: SortOrder
    parkingSlotId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotCustomerId?: SortOrderInput | SortOrder
    parkingSlotVehicleId?: SortOrderInput | SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSlotOrderStatus?: SortOrder
    parkingSlot?: ParkingSlotOrderByWithRelationInput
    parkingSlotCustomer?: UserOrderByWithRelationInput
    parkingSlotVehicle?: VehicleOrderByWithRelationInput
  }

  export type ParkingSlotOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingSlotOrderWhereInput | ParkingSlotOrderWhereInput[]
    OR?: ParkingSlotOrderWhereInput[]
    NOT?: ParkingSlotOrderWhereInput | ParkingSlotOrderWhereInput[]
    parkingSlotId?: StringFilter<"ParkingSlotOrder"> | string
    vehicleId?: StringFilter<"ParkingSlotOrder"> | string
    parkingSlotCustomerId?: StringNullableFilter<"ParkingSlotOrder"> | string | null
    parkingSlotVehicleId?: StringNullableFilter<"ParkingSlotOrder"> | string | null
    pricePerHour?: FloatFilter<"ParkingSlotOrder"> | number
    hours?: IntFilter<"ParkingSlotOrder"> | number
    createdAt?: DateTimeFilter<"ParkingSlotOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlotOrder"> | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFilter<"ParkingSlotOrder"> | $Enums.ParkingSlotOrderStatus
    parkingSlot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    parkingSlotCustomer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    parkingSlotVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }, "id">

  export type ParkingSlotOrderOrderByWithAggregationInput = {
    id?: SortOrder
    parkingSlotId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotCustomerId?: SortOrderInput | SortOrder
    parkingSlotVehicleId?: SortOrderInput | SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSlotOrderStatus?: SortOrder
    _count?: ParkingSlotOrderCountOrderByAggregateInput
    _avg?: ParkingSlotOrderAvgOrderByAggregateInput
    _max?: ParkingSlotOrderMaxOrderByAggregateInput
    _min?: ParkingSlotOrderMinOrderByAggregateInput
    _sum?: ParkingSlotOrderSumOrderByAggregateInput
  }

  export type ParkingSlotOrderScalarWhereWithAggregatesInput = {
    AND?: ParkingSlotOrderScalarWhereWithAggregatesInput | ParkingSlotOrderScalarWhereWithAggregatesInput[]
    OR?: ParkingSlotOrderScalarWhereWithAggregatesInput[]
    NOT?: ParkingSlotOrderScalarWhereWithAggregatesInput | ParkingSlotOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingSlotOrder"> | string
    parkingSlotId?: StringWithAggregatesFilter<"ParkingSlotOrder"> | string
    vehicleId?: StringWithAggregatesFilter<"ParkingSlotOrder"> | string
    parkingSlotCustomerId?: StringNullableWithAggregatesFilter<"ParkingSlotOrder"> | string | null
    parkingSlotVehicleId?: StringNullableWithAggregatesFilter<"ParkingSlotOrder"> | string | null
    pricePerHour?: FloatWithAggregatesFilter<"ParkingSlotOrder"> | number
    hours?: IntWithAggregatesFilter<"ParkingSlotOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSlotOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSlotOrder"> | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusWithAggregatesFilter<"ParkingSlotOrder"> | $Enums.ParkingSlotOrderStatus
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleCreateNestedManyWithoutVehicleOwnerInput
    parkingSlotOrders?: ParkingSlotOrderCreateNestedManyWithoutParkingSlotCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleOwnerInput
    parkingSlotOrders?: ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUpdateManyWithoutVehicleOwnerNestedInput
    parkingSlotOrders?: ParkingSlotOrderUpdateManyWithoutParkingSlotCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleOwnerNestedInput
    parkingSlotOrders?: ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleOwner: UserCreateNestedOneWithoutVehiclesInput
    parkingSlotOrder?: ParkingSlotOrderCreateNestedManyWithoutParkingSlotVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrder?: ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleOwner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    parkingSlotOrder?: ParkingSlotOrderUpdateManyWithoutParkingSlotVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    vehicleOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrder?: ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    vehicleOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingCreateInput = {
    id?: string
    maxSlots: number
    slotCategory: $Enums.ParkingCategory
    pricePerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlots?: ParkingSlotCreateNestedManyWithoutParkingInput
  }

  export type ParkingUncheckedCreateInput = {
    id?: string
    maxSlots: number
    slotCategory: $Enums.ParkingCategory
    pricePerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlots?: ParkingSlotUncheckedCreateNestedManyWithoutParkingInput
  }

  export type ParkingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxSlots?: IntFieldUpdateOperationsInput | number
    slotCategory?: EnumParkingCategoryFieldUpdateOperationsInput | $Enums.ParkingCategory
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlots?: ParkingSlotUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxSlots?: IntFieldUpdateOperationsInput | number
    slotCategory?: EnumParkingCategoryFieldUpdateOperationsInput | $Enums.ParkingCategory
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlots?: ParkingSlotUncheckedUpdateManyWithoutParkingNestedInput
  }

  export type ParkingCreateManyInput = {
    id?: string
    maxSlots: number
    slotCategory: $Enums.ParkingCategory
    pricePerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxSlots?: IntFieldUpdateOperationsInput | number
    slotCategory?: EnumParkingCategoryFieldUpdateOperationsInput | $Enums.ParkingCategory
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxSlots?: IntFieldUpdateOperationsInput | number
    slotCategory?: EnumParkingCategoryFieldUpdateOperationsInput | $Enums.ParkingCategory
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotCreateInput = {
    id?: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parking: ParkingCreateNestedOneWithoutParkingSlotsInput
    parkingSlotOrders?: ParkingSlotOrderCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUncheckedCreateInput = {
    id?: string
    parkingId: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrders?: ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking?: ParkingUpdateOneRequiredWithoutParkingSlotsNestedInput
    parkingSlotOrders?: ParkingSlotOrderUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrders?: ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotCreateManyInput = {
    id?: string
    parkingId: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotOrderCreateInput = {
    id?: string
    vehicleId: string
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingSlotOrdersInput
    parkingSlotCustomer?: UserCreateNestedOneWithoutParkingSlotOrdersInput
    parkingSlotVehicle?: VehicleCreateNestedOneWithoutParkingSlotOrderInput
  }

  export type ParkingSlotOrderUncheckedCreateInput = {
    id?: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotCustomerId?: string | null
    parkingSlotVehicleId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingSlotOrdersNestedInput
    parkingSlotCustomer?: UserUpdateOneWithoutParkingSlotOrdersNestedInput
    parkingSlotVehicle?: VehicleUpdateOneWithoutParkingSlotOrderNestedInput
  }

  export type ParkingSlotOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingSlotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderCreateManyInput = {
    id?: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotCustomerId?: string | null
    parkingSlotVehicleId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingSlotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type ParkingSlotOrderListRelationFilter = {
    every?: ParkingSlotOrderWhereInput
    some?: ParkingSlotOrderWhereInput
    none?: ParkingSlotOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingSlotOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    vehicleYear?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vehiclePlateNumber?: SortOrder
    vehicleType?: SortOrder
    vehicleColor?: SortOrder
    vehicleBrand?: SortOrder
    vehicleModel?: SortOrder
    vehicleYear?: SortOrder
    vehicleOwnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    vehicleYear?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumParkingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCategory | EnumParkingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingCategoryFilter<$PrismaModel> | $Enums.ParkingCategory
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParkingSlotListRelationFilter = {
    every?: ParkingSlotWhereInput
    some?: ParkingSlotWhereInput
    none?: ParkingSlotWhereInput
  }

  export type ParkingSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingCountOrderByAggregateInput = {
    id?: SortOrder
    maxSlots?: SortOrder
    slotCategory?: SortOrder
    pricePerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingAvgOrderByAggregateInput = {
    maxSlots?: SortOrder
    pricePerHour?: SortOrder
  }

  export type ParkingMaxOrderByAggregateInput = {
    id?: SortOrder
    maxSlots?: SortOrder
    slotCategory?: SortOrder
    pricePerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingMinOrderByAggregateInput = {
    id?: SortOrder
    maxSlots?: SortOrder
    slotCategory?: SortOrder
    pricePerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSumOrderByAggregateInput = {
    maxSlots?: SortOrder
    pricePerHour?: SortOrder
  }

  export type EnumParkingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCategory | EnumParkingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ParkingCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingCategoryFilter<$PrismaModel>
    _max?: NestedEnumParkingCategoryFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumParkingSlotSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotSize | EnumParkingSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotSizeFilter<$PrismaModel> | $Enums.ParkingSlotSize
  }

  export type EnumParkingSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotStatus | EnumParkingSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotStatusFilter<$PrismaModel> | $Enums.ParkingSlotStatus
  }

  export type ParkingScalarRelationFilter = {
    is?: ParkingWhereInput
    isNot?: ParkingWhereInput
  }

  export type ParkingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    parkingId?: SortOrder
    parkingSlotNumber?: SortOrder
    parkingSlotSize?: SortOrder
    parkingSlotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    parkingId?: SortOrder
    parkingSlotNumber?: SortOrder
    parkingSlotSize?: SortOrder
    parkingSlotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    parkingId?: SortOrder
    parkingSlotNumber?: SortOrder
    parkingSlotSize?: SortOrder
    parkingSlotStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumParkingSlotSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotSize | EnumParkingSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotSizeWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSlotSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingSlotSizeFilter<$PrismaModel>
    _max?: NestedEnumParkingSlotSizeFilter<$PrismaModel>
  }

  export type EnumParkingSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotStatus | EnumParkingSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumParkingSlotStatusFilter<$PrismaModel>
  }

  export type EnumParkingSlotOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotOrderStatus | EnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotOrderStatusFilter<$PrismaModel> | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotScalarRelationFilter = {
    is?: ParkingSlotWhereInput
    isNot?: ParkingSlotWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type ParkingSlotOrderCountOrderByAggregateInput = {
    id?: SortOrder
    parkingSlotId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotCustomerId?: SortOrder
    parkingSlotVehicleId?: SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSlotOrderStatus?: SortOrder
  }

  export type ParkingSlotOrderAvgOrderByAggregateInput = {
    pricePerHour?: SortOrder
    hours?: SortOrder
  }

  export type ParkingSlotOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    parkingSlotId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotCustomerId?: SortOrder
    parkingSlotVehicleId?: SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSlotOrderStatus?: SortOrder
  }

  export type ParkingSlotOrderMinOrderByAggregateInput = {
    id?: SortOrder
    parkingSlotId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotCustomerId?: SortOrder
    parkingSlotVehicleId?: SortOrder
    pricePerHour?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSlotOrderStatus?: SortOrder
  }

  export type ParkingSlotOrderSumOrderByAggregateInput = {
    pricePerHour?: SortOrder
    hours?: SortOrder
  }

  export type EnumParkingSlotOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotOrderStatus | EnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSlotOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingSlotOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumParkingSlotOrderStatusFilter<$PrismaModel>
  }

  export type VehicleCreateNestedManyWithoutVehicleOwnerInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ParkingSlotOrderCreateNestedManyWithoutParkingSlotCustomerInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput> | ParkingSlotOrderCreateWithoutParkingSlotCustomerInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotCustomerInputEnvelope
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutVehicleOwnerInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotCustomerInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput> | ParkingSlotOrderCreateWithoutParkingSlotCustomerInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotCustomerInputEnvelope
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VehicleUpdateManyWithoutVehicleOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleOwnerInput | VehicleUpdateManyWithWhereWithoutVehicleOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ParkingSlotOrderUpdateManyWithoutParkingSlotCustomerNestedInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput> | ParkingSlotOrderCreateWithoutParkingSlotCustomerInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput[]
    upsert?: ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotCustomerInput | ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotCustomerInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotCustomerInputEnvelope
    set?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    disconnect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    delete?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    update?: ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotCustomerInput | ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotCustomerInput[]
    updateMany?: ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotCustomerInput | ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotCustomerInput[]
    deleteMany?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput> | VehicleCreateWithoutVehicleOwnerInput[] | VehicleUncheckedCreateWithoutVehicleOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleOwnerInput | VehicleCreateOrConnectWithoutVehicleOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput[]
    createMany?: VehicleCreateManyVehicleOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput | VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleOwnerInput | VehicleUpdateManyWithWhereWithoutVehicleOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotCustomerNestedInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput> | ParkingSlotOrderCreateWithoutParkingSlotCustomerInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput[]
    upsert?: ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotCustomerInput | ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotCustomerInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotCustomerInputEnvelope
    set?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    disconnect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    delete?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    update?: ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotCustomerInput | ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotCustomerInput[]
    updateMany?: ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotCustomerInput | ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotCustomerInput[]
    deleteMany?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingSlotOrderCreateNestedManyWithoutParkingSlotVehicleInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput> | ParkingSlotOrderCreateWithoutParkingSlotVehicleInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotVehicleInputEnvelope
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
  }

  export type ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotVehicleInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput> | ParkingSlotOrderCreateWithoutParkingSlotVehicleInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotVehicleInputEnvelope
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type ParkingSlotOrderUpdateManyWithoutParkingSlotVehicleNestedInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput> | ParkingSlotOrderCreateWithoutParkingSlotVehicleInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput[]
    upsert?: ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotVehicleInput | ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotVehicleInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotVehicleInputEnvelope
    set?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    disconnect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    delete?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    update?: ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotVehicleInput | ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotVehicleInput[]
    updateMany?: ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotVehicleInput | ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotVehicleInput[]
    deleteMany?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
  }

  export type ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotVehicleNestedInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput> | ParkingSlotOrderCreateWithoutParkingSlotVehicleInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput[]
    upsert?: ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotVehicleInput | ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotVehicleInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotVehicleInputEnvelope
    set?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    disconnect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    delete?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    update?: ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotVehicleInput | ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotVehicleInput[]
    updateMany?: ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotVehicleInput | ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotVehicleInput[]
    deleteMany?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
  }

  export type ParkingSlotCreateNestedManyWithoutParkingInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingInput, ParkingSlotUncheckedCreateWithoutParkingInput> | ParkingSlotCreateWithoutParkingInput[] | ParkingSlotUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingInput | ParkingSlotCreateOrConnectWithoutParkingInput[]
    createMany?: ParkingSlotCreateManyParkingInputEnvelope
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
  }

  export type ParkingSlotUncheckedCreateNestedManyWithoutParkingInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingInput, ParkingSlotUncheckedCreateWithoutParkingInput> | ParkingSlotCreateWithoutParkingInput[] | ParkingSlotUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingInput | ParkingSlotCreateOrConnectWithoutParkingInput[]
    createMany?: ParkingSlotCreateManyParkingInputEnvelope
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
  }

  export type EnumParkingCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ParkingCategory
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingSlotUpdateManyWithoutParkingNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingInput, ParkingSlotUncheckedCreateWithoutParkingInput> | ParkingSlotCreateWithoutParkingInput[] | ParkingSlotUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingInput | ParkingSlotCreateOrConnectWithoutParkingInput[]
    upsert?: ParkingSlotUpsertWithWhereUniqueWithoutParkingInput | ParkingSlotUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: ParkingSlotCreateManyParkingInputEnvelope
    set?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    disconnect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    delete?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    update?: ParkingSlotUpdateWithWhereUniqueWithoutParkingInput | ParkingSlotUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: ParkingSlotUpdateManyWithWhereWithoutParkingInput | ParkingSlotUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
  }

  export type ParkingSlotUncheckedUpdateManyWithoutParkingNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingInput, ParkingSlotUncheckedCreateWithoutParkingInput> | ParkingSlotCreateWithoutParkingInput[] | ParkingSlotUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingInput | ParkingSlotCreateOrConnectWithoutParkingInput[]
    upsert?: ParkingSlotUpsertWithWhereUniqueWithoutParkingInput | ParkingSlotUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: ParkingSlotCreateManyParkingInputEnvelope
    set?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    disconnect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    delete?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    update?: ParkingSlotUpdateWithWhereUniqueWithoutParkingInput | ParkingSlotUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: ParkingSlotUpdateManyWithWhereWithoutParkingInput | ParkingSlotUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
  }

  export type ParkingCreateNestedOneWithoutParkingSlotsInput = {
    create?: XOR<ParkingCreateWithoutParkingSlotsInput, ParkingUncheckedCreateWithoutParkingSlotsInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutParkingSlotsInput
    connect?: ParkingWhereUniqueInput
  }

  export type ParkingSlotOrderCreateNestedManyWithoutParkingSlotInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput> | ParkingSlotOrderCreateWithoutParkingSlotInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotInputEnvelope
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
  }

  export type ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput> | ParkingSlotOrderCreateWithoutParkingSlotInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotInputEnvelope
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
  }

  export type EnumParkingSlotSizeFieldUpdateOperationsInput = {
    set?: $Enums.ParkingSlotSize
  }

  export type EnumParkingSlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParkingSlotStatus
  }

  export type ParkingUpdateOneRequiredWithoutParkingSlotsNestedInput = {
    create?: XOR<ParkingCreateWithoutParkingSlotsInput, ParkingUncheckedCreateWithoutParkingSlotsInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutParkingSlotsInput
    upsert?: ParkingUpsertWithoutParkingSlotsInput
    connect?: ParkingWhereUniqueInput
    update?: XOR<XOR<ParkingUpdateToOneWithWhereWithoutParkingSlotsInput, ParkingUpdateWithoutParkingSlotsInput>, ParkingUncheckedUpdateWithoutParkingSlotsInput>
  }

  export type ParkingSlotOrderUpdateManyWithoutParkingSlotNestedInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput> | ParkingSlotOrderCreateWithoutParkingSlotInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput[]
    upsert?: ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotInput | ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotInputEnvelope
    set?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    disconnect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    delete?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    update?: ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotInput | ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotInput[]
    updateMany?: ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotInput | ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotInput[]
    deleteMany?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
  }

  export type ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotNestedInput = {
    create?: XOR<ParkingSlotOrderCreateWithoutParkingSlotInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput> | ParkingSlotOrderCreateWithoutParkingSlotInput[] | ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput | ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput[]
    upsert?: ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotInput | ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotInput[]
    createMany?: ParkingSlotOrderCreateManyParkingSlotInputEnvelope
    set?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    disconnect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    delete?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    connect?: ParkingSlotOrderWhereUniqueInput | ParkingSlotOrderWhereUniqueInput[]
    update?: ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotInput | ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotInput[]
    updateMany?: ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotInput | ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotInput[]
    deleteMany?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
  }

  export type ParkingSlotCreateNestedOneWithoutParkingSlotOrdersInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingSlotOrdersInput, ParkingSlotUncheckedCreateWithoutParkingSlotOrdersInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingSlotOrdersInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParkingSlotOrdersInput = {
    create?: XOR<UserCreateWithoutParkingSlotOrdersInput, UserUncheckedCreateWithoutParkingSlotOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingSlotOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutParkingSlotOrderInput = {
    create?: XOR<VehicleCreateWithoutParkingSlotOrderInput, VehicleUncheckedCreateWithoutParkingSlotOrderInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingSlotOrderInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumParkingSlotOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotUpdateOneRequiredWithoutParkingSlotOrdersNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingSlotOrdersInput, ParkingSlotUncheckedCreateWithoutParkingSlotOrdersInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingSlotOrdersInput
    upsert?: ParkingSlotUpsertWithoutParkingSlotOrdersInput
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutParkingSlotOrdersInput, ParkingSlotUpdateWithoutParkingSlotOrdersInput>, ParkingSlotUncheckedUpdateWithoutParkingSlotOrdersInput>
  }

  export type UserUpdateOneWithoutParkingSlotOrdersNestedInput = {
    create?: XOR<UserCreateWithoutParkingSlotOrdersInput, UserUncheckedCreateWithoutParkingSlotOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingSlotOrdersInput
    upsert?: UserUpsertWithoutParkingSlotOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingSlotOrdersInput, UserUpdateWithoutParkingSlotOrdersInput>, UserUncheckedUpdateWithoutParkingSlotOrdersInput>
  }

  export type VehicleUpdateOneWithoutParkingSlotOrderNestedInput = {
    create?: XOR<VehicleCreateWithoutParkingSlotOrderInput, VehicleUncheckedCreateWithoutParkingSlotOrderInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingSlotOrderInput
    upsert?: VehicleUpsertWithoutParkingSlotOrderInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutParkingSlotOrderInput, VehicleUpdateWithoutParkingSlotOrderInput>, VehicleUncheckedUpdateWithoutParkingSlotOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumParkingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCategory | EnumParkingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingCategoryFilter<$PrismaModel> | $Enums.ParkingCategory
  }

  export type NestedEnumParkingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCategory | EnumParkingCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingCategory[] | ListEnumParkingCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ParkingCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingCategoryFilter<$PrismaModel>
    _max?: NestedEnumParkingCategoryFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumParkingSlotSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotSize | EnumParkingSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotSizeFilter<$PrismaModel> | $Enums.ParkingSlotSize
  }

  export type NestedEnumParkingSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotStatus | EnumParkingSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotStatusFilter<$PrismaModel> | $Enums.ParkingSlotStatus
  }

  export type NestedEnumParkingSlotSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotSize | EnumParkingSlotSizeFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotSize[] | ListEnumParkingSlotSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotSizeWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSlotSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingSlotSizeFilter<$PrismaModel>
    _max?: NestedEnumParkingSlotSizeFilter<$PrismaModel>
  }

  export type NestedEnumParkingSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotStatus | EnumParkingSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotStatus[] | ListEnumParkingSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumParkingSlotStatusFilter<$PrismaModel>
  }

  export type NestedEnumParkingSlotOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotOrderStatus | EnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotOrderStatusFilter<$PrismaModel> | $Enums.ParkingSlotOrderStatus
  }

  export type NestedEnumParkingSlotOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSlotOrderStatus | EnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParkingSlotOrderStatus[] | ListEnumParkingSlotOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParkingSlotOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSlotOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParkingSlotOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumParkingSlotOrderStatusFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutVehicleOwnerInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrder?: ParkingSlotOrderCreateNestedManyWithoutParkingSlotVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleOwnerInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrder?: ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput>
  }

  export type VehicleCreateManyVehicleOwnerInputEnvelope = {
    data: VehicleCreateManyVehicleOwnerInput | VehicleCreateManyVehicleOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSlotOrderCreateWithoutParkingSlotCustomerInput = {
    id?: string
    vehicleId: string
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingSlotOrdersInput
    parkingSlotVehicle?: VehicleCreateNestedOneWithoutParkingSlotOrderInput
  }

  export type ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput = {
    id?: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotVehicleId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderCreateOrConnectWithoutParkingSlotCustomerInput = {
    where: ParkingSlotOrderWhereUniqueInput
    create: XOR<ParkingSlotOrderCreateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput>
  }

  export type ParkingSlotOrderCreateManyParkingSlotCustomerInputEnvelope = {
    data: ParkingSlotOrderCreateManyParkingSlotCustomerInput | ParkingSlotOrderCreateManyParkingSlotCustomerInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutVehicleOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutVehicleOwnerInput, VehicleUncheckedUpdateWithoutVehicleOwnerInput>
    create: XOR<VehicleCreateWithoutVehicleOwnerInput, VehicleUncheckedCreateWithoutVehicleOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutVehicleOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutVehicleOwnerInput, VehicleUncheckedUpdateWithoutVehicleOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutVehicleOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehicleOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehiclePlateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    vehicleColor?: StringFilter<"Vehicle"> | string
    vehicleBrand?: StringFilter<"Vehicle"> | string
    vehicleModel?: StringFilter<"Vehicle"> | string
    vehicleYear?: IntFilter<"Vehicle"> | number
    vehicleOwnerId?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotCustomerInput = {
    where: ParkingSlotOrderWhereUniqueInput
    update: XOR<ParkingSlotOrderUpdateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedUpdateWithoutParkingSlotCustomerInput>
    create: XOR<ParkingSlotOrderCreateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotCustomerInput>
  }

  export type ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotCustomerInput = {
    where: ParkingSlotOrderWhereUniqueInput
    data: XOR<ParkingSlotOrderUpdateWithoutParkingSlotCustomerInput, ParkingSlotOrderUncheckedUpdateWithoutParkingSlotCustomerInput>
  }

  export type ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotCustomerInput = {
    where: ParkingSlotOrderScalarWhereInput
    data: XOR<ParkingSlotOrderUpdateManyMutationInput, ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotCustomerInput>
  }

  export type ParkingSlotOrderScalarWhereInput = {
    AND?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
    OR?: ParkingSlotOrderScalarWhereInput[]
    NOT?: ParkingSlotOrderScalarWhereInput | ParkingSlotOrderScalarWhereInput[]
    id?: StringFilter<"ParkingSlotOrder"> | string
    parkingSlotId?: StringFilter<"ParkingSlotOrder"> | string
    vehicleId?: StringFilter<"ParkingSlotOrder"> | string
    parkingSlotCustomerId?: StringNullableFilter<"ParkingSlotOrder"> | string | null
    parkingSlotVehicleId?: StringNullableFilter<"ParkingSlotOrder"> | string | null
    pricePerHour?: FloatFilter<"ParkingSlotOrder"> | number
    hours?: IntFilter<"ParkingSlotOrder"> | number
    createdAt?: DateTimeFilter<"ParkingSlotOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlotOrder"> | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFilter<"ParkingSlotOrder"> | $Enums.ParkingSlotOrderStatus
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    parkingSlotOrders?: ParkingSlotOrderCreateNestedManyWithoutParkingSlotCustomerInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    parkingSlotOrders?: ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotCustomerInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type ParkingSlotOrderCreateWithoutParkingSlotVehicleInput = {
    id?: string
    vehicleId: string
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingSlotOrdersInput
    parkingSlotCustomer?: UserCreateNestedOneWithoutParkingSlotOrdersInput
  }

  export type ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput = {
    id?: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotCustomerId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderCreateOrConnectWithoutParkingSlotVehicleInput = {
    where: ParkingSlotOrderWhereUniqueInput
    create: XOR<ParkingSlotOrderCreateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput>
  }

  export type ParkingSlotOrderCreateManyParkingSlotVehicleInputEnvelope = {
    data: ParkingSlotOrderCreateManyParkingSlotVehicleInput | ParkingSlotOrderCreateManyParkingSlotVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parkingSlotOrders?: ParkingSlotOrderUpdateManyWithoutParkingSlotCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parkingSlotOrders?: ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotCustomerNestedInput
  }

  export type ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotVehicleInput = {
    where: ParkingSlotOrderWhereUniqueInput
    update: XOR<ParkingSlotOrderUpdateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedUpdateWithoutParkingSlotVehicleInput>
    create: XOR<ParkingSlotOrderCreateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotVehicleInput>
  }

  export type ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotVehicleInput = {
    where: ParkingSlotOrderWhereUniqueInput
    data: XOR<ParkingSlotOrderUpdateWithoutParkingSlotVehicleInput, ParkingSlotOrderUncheckedUpdateWithoutParkingSlotVehicleInput>
  }

  export type ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotVehicleInput = {
    where: ParkingSlotOrderScalarWhereInput
    data: XOR<ParkingSlotOrderUpdateManyMutationInput, ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotVehicleInput>
  }

  export type ParkingSlotCreateWithoutParkingInput = {
    id?: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrders?: ParkingSlotOrderCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUncheckedCreateWithoutParkingInput = {
    id?: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrders?: ParkingSlotOrderUncheckedCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotCreateOrConnectWithoutParkingInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingInput, ParkingSlotUncheckedCreateWithoutParkingInput>
  }

  export type ParkingSlotCreateManyParkingInputEnvelope = {
    data: ParkingSlotCreateManyParkingInput | ParkingSlotCreateManyParkingInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSlotUpsertWithWhereUniqueWithoutParkingInput = {
    where: ParkingSlotWhereUniqueInput
    update: XOR<ParkingSlotUpdateWithoutParkingInput, ParkingSlotUncheckedUpdateWithoutParkingInput>
    create: XOR<ParkingSlotCreateWithoutParkingInput, ParkingSlotUncheckedCreateWithoutParkingInput>
  }

  export type ParkingSlotUpdateWithWhereUniqueWithoutParkingInput = {
    where: ParkingSlotWhereUniqueInput
    data: XOR<ParkingSlotUpdateWithoutParkingInput, ParkingSlotUncheckedUpdateWithoutParkingInput>
  }

  export type ParkingSlotUpdateManyWithWhereWithoutParkingInput = {
    where: ParkingSlotScalarWhereInput
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyWithoutParkingInput>
  }

  export type ParkingSlotScalarWhereInput = {
    AND?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
    OR?: ParkingSlotScalarWhereInput[]
    NOT?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    parkingId?: StringFilter<"ParkingSlot"> | string
    parkingSlotNumber?: StringFilter<"ParkingSlot"> | string
    parkingSlotSize?: EnumParkingSlotSizeFilter<"ParkingSlot"> | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFilter<"ParkingSlot"> | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
  }

  export type ParkingCreateWithoutParkingSlotsInput = {
    id?: string
    maxSlots: number
    slotCategory: $Enums.ParkingCategory
    pricePerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingUncheckedCreateWithoutParkingSlotsInput = {
    id?: string
    maxSlots: number
    slotCategory: $Enums.ParkingCategory
    pricePerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingCreateOrConnectWithoutParkingSlotsInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutParkingSlotsInput, ParkingUncheckedCreateWithoutParkingSlotsInput>
  }

  export type ParkingSlotOrderCreateWithoutParkingSlotInput = {
    id?: string
    vehicleId: string
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
    parkingSlotCustomer?: UserCreateNestedOneWithoutParkingSlotOrdersInput
    parkingSlotVehicle?: VehicleCreateNestedOneWithoutParkingSlotOrderInput
  }

  export type ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput = {
    id?: string
    vehicleId: string
    parkingSlotCustomerId?: string | null
    parkingSlotVehicleId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderCreateOrConnectWithoutParkingSlotInput = {
    where: ParkingSlotOrderWhereUniqueInput
    create: XOR<ParkingSlotOrderCreateWithoutParkingSlotInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput>
  }

  export type ParkingSlotOrderCreateManyParkingSlotInputEnvelope = {
    data: ParkingSlotOrderCreateManyParkingSlotInput | ParkingSlotOrderCreateManyParkingSlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingUpsertWithoutParkingSlotsInput = {
    update: XOR<ParkingUpdateWithoutParkingSlotsInput, ParkingUncheckedUpdateWithoutParkingSlotsInput>
    create: XOR<ParkingCreateWithoutParkingSlotsInput, ParkingUncheckedCreateWithoutParkingSlotsInput>
    where?: ParkingWhereInput
  }

  export type ParkingUpdateToOneWithWhereWithoutParkingSlotsInput = {
    where?: ParkingWhereInput
    data: XOR<ParkingUpdateWithoutParkingSlotsInput, ParkingUncheckedUpdateWithoutParkingSlotsInput>
  }

  export type ParkingUpdateWithoutParkingSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxSlots?: IntFieldUpdateOperationsInput | number
    slotCategory?: EnumParkingCategoryFieldUpdateOperationsInput | $Enums.ParkingCategory
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUncheckedUpdateWithoutParkingSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxSlots?: IntFieldUpdateOperationsInput | number
    slotCategory?: EnumParkingCategoryFieldUpdateOperationsInput | $Enums.ParkingCategory
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotOrderUpsertWithWhereUniqueWithoutParkingSlotInput = {
    where: ParkingSlotOrderWhereUniqueInput
    update: XOR<ParkingSlotOrderUpdateWithoutParkingSlotInput, ParkingSlotOrderUncheckedUpdateWithoutParkingSlotInput>
    create: XOR<ParkingSlotOrderCreateWithoutParkingSlotInput, ParkingSlotOrderUncheckedCreateWithoutParkingSlotInput>
  }

  export type ParkingSlotOrderUpdateWithWhereUniqueWithoutParkingSlotInput = {
    where: ParkingSlotOrderWhereUniqueInput
    data: XOR<ParkingSlotOrderUpdateWithoutParkingSlotInput, ParkingSlotOrderUncheckedUpdateWithoutParkingSlotInput>
  }

  export type ParkingSlotOrderUpdateManyWithWhereWithoutParkingSlotInput = {
    where: ParkingSlotOrderScalarWhereInput
    data: XOR<ParkingSlotOrderUpdateManyMutationInput, ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotInput>
  }

  export type ParkingSlotCreateWithoutParkingSlotOrdersInput = {
    id?: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parking: ParkingCreateNestedOneWithoutParkingSlotsInput
  }

  export type ParkingSlotUncheckedCreateWithoutParkingSlotOrdersInput = {
    id?: string
    parkingId: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotCreateOrConnectWithoutParkingSlotOrdersInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingSlotOrdersInput, ParkingSlotUncheckedCreateWithoutParkingSlotOrdersInput>
  }

  export type UserCreateWithoutParkingSlotOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleCreateNestedManyWithoutVehicleOwnerInput
  }

  export type UserUncheckedCreateWithoutParkingSlotOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    vehicles?: VehicleUncheckedCreateNestedManyWithoutVehicleOwnerInput
  }

  export type UserCreateOrConnectWithoutParkingSlotOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingSlotOrdersInput, UserUncheckedCreateWithoutParkingSlotOrdersInput>
  }

  export type VehicleCreateWithoutParkingSlotOrderInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleOwner: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutParkingSlotOrderInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    vehicleOwnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutParkingSlotOrderInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutParkingSlotOrderInput, VehicleUncheckedCreateWithoutParkingSlotOrderInput>
  }

  export type ParkingSlotUpsertWithoutParkingSlotOrdersInput = {
    update: XOR<ParkingSlotUpdateWithoutParkingSlotOrdersInput, ParkingSlotUncheckedUpdateWithoutParkingSlotOrdersInput>
    create: XOR<ParkingSlotCreateWithoutParkingSlotOrdersInput, ParkingSlotUncheckedCreateWithoutParkingSlotOrdersInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutParkingSlotOrdersInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutParkingSlotOrdersInput, ParkingSlotUncheckedUpdateWithoutParkingSlotOrdersInput>
  }

  export type ParkingSlotUpdateWithoutParkingSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking?: ParkingUpdateOneRequiredWithoutParkingSlotsNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutParkingSlotOrdersInput = {
    update: XOR<UserUpdateWithoutParkingSlotOrdersInput, UserUncheckedUpdateWithoutParkingSlotOrdersInput>
    create: XOR<UserCreateWithoutParkingSlotOrdersInput, UserUncheckedCreateWithoutParkingSlotOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingSlotOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingSlotOrdersInput, UserUncheckedUpdateWithoutParkingSlotOrdersInput>
  }

  export type UserUpdateWithoutParkingSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUpdateManyWithoutVehicleOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingSlotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleOwnerNestedInput
  }

  export type VehicleUpsertWithoutParkingSlotOrderInput = {
    update: XOR<VehicleUpdateWithoutParkingSlotOrderInput, VehicleUncheckedUpdateWithoutParkingSlotOrderInput>
    create: XOR<VehicleCreateWithoutParkingSlotOrderInput, VehicleUncheckedCreateWithoutParkingSlotOrderInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutParkingSlotOrderInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutParkingSlotOrderInput, VehicleUncheckedUpdateWithoutParkingSlotOrderInput>
  }

  export type VehicleUpdateWithoutParkingSlotOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleOwner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutParkingSlotOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    vehicleOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyVehicleOwnerInput = {
    id?: string
    vehiclePlateNumber: string
    vehicleType?: $Enums.VehicleType
    vehicleColor: string
    vehicleBrand: string
    vehicleModel: string
    vehicleYear: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotOrderCreateManyParkingSlotCustomerInput = {
    id?: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotVehicleId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type VehicleUpdateWithoutVehicleOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrder?: ParkingSlotOrderUpdateManyWithoutParkingSlotVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrder?: ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehicleBrand?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    vehicleYear?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotOrderUpdateWithoutParkingSlotCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingSlotOrdersNestedInput
    parkingSlotVehicle?: VehicleUpdateOneWithoutParkingSlotOrderNestedInput
  }

  export type ParkingSlotOrderUncheckedUpdateWithoutParkingSlotCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderCreateManyParkingSlotVehicleInput = {
    id?: string
    parkingSlotId: string
    vehicleId: string
    parkingSlotCustomerId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUpdateWithoutParkingSlotVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingSlotOrdersNestedInput
    parkingSlotCustomer?: UserUpdateOneWithoutParkingSlotOrdersNestedInput
  }

  export type ParkingSlotOrderUncheckedUpdateWithoutParkingSlotVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotCreateManyParkingInput = {
    id?: string
    parkingSlotNumber: string
    parkingSlotSize?: $Enums.ParkingSlotSize
    parkingSlotStatus?: $Enums.ParkingSlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrders?: ParkingSlotOrderUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrders?: ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateManyWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingSlotNumber?: StringFieldUpdateOperationsInput | string
    parkingSlotSize?: EnumParkingSlotSizeFieldUpdateOperationsInput | $Enums.ParkingSlotSize
    parkingSlotStatus?: EnumParkingSlotStatusFieldUpdateOperationsInput | $Enums.ParkingSlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotOrderCreateManyParkingSlotInput = {
    id?: string
    vehicleId: string
    parkingSlotCustomerId?: string | null
    parkingSlotVehicleId?: string | null
    pricePerHour: number
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSlotOrderStatus?: $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUpdateWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
    parkingSlotCustomer?: UserUpdateOneWithoutParkingSlotOrdersNestedInput
    parkingSlotVehicle?: VehicleUpdateOneWithoutParkingSlotOrderNestedInput
  }

  export type ParkingSlotOrderUncheckedUpdateWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingSlotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
  }

  export type ParkingSlotOrderUncheckedUpdateManyWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingSlotVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerHour?: FloatFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSlotOrderStatus?: EnumParkingSlotOrderStatusFieldUpdateOperationsInput | $Enums.ParkingSlotOrderStatus
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