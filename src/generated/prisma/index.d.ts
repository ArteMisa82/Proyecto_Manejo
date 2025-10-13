
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
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model franquicias
 * 
 */
export type franquicias = $Result.DefaultSelection<Prisma.$franquiciasPayload>
/**
 * Model hardware
 * 
 */
export type hardware = $Result.DefaultSelection<Prisma.$hardwarePayload>
/**
 * Model juegos
 * 
 */
export type juegos = $Result.DefaultSelection<Prisma.$juegosPayload>
/**
 * Model marcas
 * 
 */
export type marcas = $Result.DefaultSelection<Prisma.$marcasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
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
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.franquicias`: Exposes CRUD operations for the **franquicias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Franquicias
    * const franquicias = await prisma.franquicias.findMany()
    * ```
    */
  get franquicias(): Prisma.franquiciasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hardware`: Exposes CRUD operations for the **hardware** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hardware
    * const hardware = await prisma.hardware.findMany()
    * ```
    */
  get hardware(): Prisma.hardwareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juegos`: Exposes CRUD operations for the **juegos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juegos
    * const juegos = await prisma.juegos.findMany()
    * ```
    */
  get juegos(): Prisma.juegosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marcas`: Exposes CRUD operations for the **marcas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcas
    * const marcas = await prisma.marcas.findMany()
    * ```
    */
  get marcas(): Prisma.marcasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    categorias: 'categorias',
    franquicias: 'franquicias',
    hardware: 'hardware',
    juegos: 'juegos',
    marcas: 'marcas'
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
      modelProps: "categorias" | "franquicias" | "hardware" | "juegos" | "marcas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      franquicias: {
        payload: Prisma.$franquiciasPayload<ExtArgs>
        fields: Prisma.franquiciasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.franquiciasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.franquiciasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>
          }
          findFirst: {
            args: Prisma.franquiciasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.franquiciasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>
          }
          findMany: {
            args: Prisma.franquiciasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>[]
          }
          create: {
            args: Prisma.franquiciasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>
          }
          createMany: {
            args: Prisma.franquiciasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.franquiciasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>[]
          }
          delete: {
            args: Prisma.franquiciasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>
          }
          update: {
            args: Prisma.franquiciasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>
          }
          deleteMany: {
            args: Prisma.franquiciasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.franquiciasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.franquiciasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>[]
          }
          upsert: {
            args: Prisma.franquiciasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$franquiciasPayload>
          }
          aggregate: {
            args: Prisma.FranquiciasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFranquicias>
          }
          groupBy: {
            args: Prisma.franquiciasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FranquiciasGroupByOutputType>[]
          }
          count: {
            args: Prisma.franquiciasCountArgs<ExtArgs>
            result: $Utils.Optional<FranquiciasCountAggregateOutputType> | number
          }
        }
      }
      hardware: {
        payload: Prisma.$hardwarePayload<ExtArgs>
        fields: Prisma.hardwareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hardwareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hardwareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>
          }
          findFirst: {
            args: Prisma.hardwareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hardwareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>
          }
          findMany: {
            args: Prisma.hardwareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>[]
          }
          create: {
            args: Prisma.hardwareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>
          }
          createMany: {
            args: Prisma.hardwareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hardwareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>[]
          }
          delete: {
            args: Prisma.hardwareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>
          }
          update: {
            args: Prisma.hardwareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>
          }
          deleteMany: {
            args: Prisma.hardwareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hardwareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hardwareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>[]
          }
          upsert: {
            args: Prisma.hardwareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hardwarePayload>
          }
          aggregate: {
            args: Prisma.HardwareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHardware>
          }
          groupBy: {
            args: Prisma.hardwareGroupByArgs<ExtArgs>
            result: $Utils.Optional<HardwareGroupByOutputType>[]
          }
          count: {
            args: Prisma.hardwareCountArgs<ExtArgs>
            result: $Utils.Optional<HardwareCountAggregateOutputType> | number
          }
        }
      }
      juegos: {
        payload: Prisma.$juegosPayload<ExtArgs>
        fields: Prisma.juegosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.juegosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.juegosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>
          }
          findFirst: {
            args: Prisma.juegosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.juegosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>
          }
          findMany: {
            args: Prisma.juegosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>[]
          }
          create: {
            args: Prisma.juegosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>
          }
          createMany: {
            args: Prisma.juegosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.juegosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>[]
          }
          delete: {
            args: Prisma.juegosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>
          }
          update: {
            args: Prisma.juegosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>
          }
          deleteMany: {
            args: Prisma.juegosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.juegosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.juegosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>[]
          }
          upsert: {
            args: Prisma.juegosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$juegosPayload>
          }
          aggregate: {
            args: Prisma.JuegosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuegos>
          }
          groupBy: {
            args: Prisma.juegosGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegosGroupByOutputType>[]
          }
          count: {
            args: Prisma.juegosCountArgs<ExtArgs>
            result: $Utils.Optional<JuegosCountAggregateOutputType> | number
          }
        }
      }
      marcas: {
        payload: Prisma.$marcasPayload<ExtArgs>
        fields: Prisma.marcasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.marcasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.marcasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          findFirst: {
            args: Prisma.marcasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.marcasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          findMany: {
            args: Prisma.marcasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>[]
          }
          create: {
            args: Prisma.marcasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          createMany: {
            args: Prisma.marcasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.marcasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>[]
          }
          delete: {
            args: Prisma.marcasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          update: {
            args: Prisma.marcasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          deleteMany: {
            args: Prisma.marcasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.marcasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.marcasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>[]
          }
          upsert: {
            args: Prisma.marcasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          aggregate: {
            args: Prisma.MarcasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcas>
          }
          groupBy: {
            args: Prisma.marcasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcasGroupByOutputType>[]
          }
          count: {
            args: Prisma.marcasCountArgs<ExtArgs>
            result: $Utils.Optional<MarcasCountAggregateOutputType> | number
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
    categorias?: categoriasOmit
    franquicias?: franquiciasOmit
    hardware?: hardwareOmit
    juegos?: juegosOmit
    marcas?: marcasOmit
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
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    juegos: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | CategoriasCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juegosWhereInput
  }


  /**
   * Count Type FranquiciasCountOutputType
   */

  export type FranquiciasCountOutputType = {
    juegos: number
  }

  export type FranquiciasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | FranquiciasCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * FranquiciasCountOutputType without action
   */
  export type FranquiciasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranquiciasCountOutputType
     */
    select?: FranquiciasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FranquiciasCountOutputType without action
   */
  export type FranquiciasCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juegosWhereInput
  }


  /**
   * Count Type MarcasCountOutputType
   */

  export type MarcasCountOutputType = {
    hardware: number
  }

  export type MarcasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hardware?: boolean | MarcasCountOutputTypeCountHardwareArgs
  }

  // Custom InputTypes
  /**
   * MarcasCountOutputType without action
   */
  export type MarcasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcasCountOutputType
     */
    select?: MarcasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcasCountOutputType without action
   */
  export type MarcasCountOutputTypeCountHardwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hardwareWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id_cat: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id_cat: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id_cat: number | null
    nom_cat: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id_cat: number | null
    nom_cat: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id_cat: number
    nom_cat: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id_cat?: true
  }

  export type CategoriasSumAggregateInputType = {
    id_cat?: true
  }

  export type CategoriasMinAggregateInputType = {
    id_cat?: true
    nom_cat?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id_cat?: true
    nom_cat?: true
  }

  export type CategoriasCountAggregateInputType = {
    id_cat?: true
    nom_cat?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id_cat: number
    nom_cat: string
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cat?: boolean
    nom_cat?: boolean
    juegos?: boolean | categorias$juegosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cat?: boolean
    nom_cat?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cat?: boolean
    nom_cat?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id_cat?: boolean
    nom_cat?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cat" | "nom_cat", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | categorias$juegosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      juegos: Prisma.$juegosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cat: number
      nom_cat: string
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id_cat`
     * const categoriasWithId_catOnly = await prisma.categorias.findMany({ select: { id_cat: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_cat`
     * const categoriasWithId_catOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id_cat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_cat`
     * const categoriasWithId_catOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id_cat: true },
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
    updateManyAndReturn<T extends categoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends categorias$juegosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id_cat: FieldRef<"categorias", 'Int'>
    readonly nom_cat: FieldRef<"categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias createManyAndReturn
   */
  export type categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias updateManyAndReturn
   */
  export type categoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.juegos
   */
  export type categorias$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    where?: juegosWhereInput
    orderBy?: juegosOrderByWithRelationInput | juegosOrderByWithRelationInput[]
    cursor?: juegosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model franquicias
   */

  export type AggregateFranquicias = {
    _count: FranquiciasCountAggregateOutputType | null
    _avg: FranquiciasAvgAggregateOutputType | null
    _sum: FranquiciasSumAggregateOutputType | null
    _min: FranquiciasMinAggregateOutputType | null
    _max: FranquiciasMaxAggregateOutputType | null
  }

  export type FranquiciasAvgAggregateOutputType = {
    id_fra: number | null
  }

  export type FranquiciasSumAggregateOutputType = {
    id_fra: number | null
  }

  export type FranquiciasMinAggregateOutputType = {
    id_fra: number | null
    nom_fra: string | null
    des_fra: string | null
  }

  export type FranquiciasMaxAggregateOutputType = {
    id_fra: number | null
    nom_fra: string | null
    des_fra: string | null
  }

  export type FranquiciasCountAggregateOutputType = {
    id_fra: number
    nom_fra: number
    des_fra: number
    _all: number
  }


  export type FranquiciasAvgAggregateInputType = {
    id_fra?: true
  }

  export type FranquiciasSumAggregateInputType = {
    id_fra?: true
  }

  export type FranquiciasMinAggregateInputType = {
    id_fra?: true
    nom_fra?: true
    des_fra?: true
  }

  export type FranquiciasMaxAggregateInputType = {
    id_fra?: true
    nom_fra?: true
    des_fra?: true
  }

  export type FranquiciasCountAggregateInputType = {
    id_fra?: true
    nom_fra?: true
    des_fra?: true
    _all?: true
  }

  export type FranquiciasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which franquicias to aggregate.
     */
    where?: franquiciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of franquicias to fetch.
     */
    orderBy?: franquiciasOrderByWithRelationInput | franquiciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: franquiciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` franquicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` franquicias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned franquicias
    **/
    _count?: true | FranquiciasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FranquiciasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FranquiciasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FranquiciasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FranquiciasMaxAggregateInputType
  }

  export type GetFranquiciasAggregateType<T extends FranquiciasAggregateArgs> = {
        [P in keyof T & keyof AggregateFranquicias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFranquicias[P]>
      : GetScalarType<T[P], AggregateFranquicias[P]>
  }




  export type franquiciasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: franquiciasWhereInput
    orderBy?: franquiciasOrderByWithAggregationInput | franquiciasOrderByWithAggregationInput[]
    by: FranquiciasScalarFieldEnum[] | FranquiciasScalarFieldEnum
    having?: franquiciasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FranquiciasCountAggregateInputType | true
    _avg?: FranquiciasAvgAggregateInputType
    _sum?: FranquiciasSumAggregateInputType
    _min?: FranquiciasMinAggregateInputType
    _max?: FranquiciasMaxAggregateInputType
  }

  export type FranquiciasGroupByOutputType = {
    id_fra: number
    nom_fra: string
    des_fra: string | null
    _count: FranquiciasCountAggregateOutputType | null
    _avg: FranquiciasAvgAggregateOutputType | null
    _sum: FranquiciasSumAggregateOutputType | null
    _min: FranquiciasMinAggregateOutputType | null
    _max: FranquiciasMaxAggregateOutputType | null
  }

  type GetFranquiciasGroupByPayload<T extends franquiciasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FranquiciasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FranquiciasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FranquiciasGroupByOutputType[P]>
            : GetScalarType<T[P], FranquiciasGroupByOutputType[P]>
        }
      >
    >


  export type franquiciasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fra?: boolean
    nom_fra?: boolean
    des_fra?: boolean
    juegos?: boolean | franquicias$juegosArgs<ExtArgs>
    _count?: boolean | FranquiciasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["franquicias"]>

  export type franquiciasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fra?: boolean
    nom_fra?: boolean
    des_fra?: boolean
  }, ExtArgs["result"]["franquicias"]>

  export type franquiciasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fra?: boolean
    nom_fra?: boolean
    des_fra?: boolean
  }, ExtArgs["result"]["franquicias"]>

  export type franquiciasSelectScalar = {
    id_fra?: boolean
    nom_fra?: boolean
    des_fra?: boolean
  }

  export type franquiciasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_fra" | "nom_fra" | "des_fra", ExtArgs["result"]["franquicias"]>
  export type franquiciasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | franquicias$juegosArgs<ExtArgs>
    _count?: boolean | FranquiciasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type franquiciasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type franquiciasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $franquiciasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "franquicias"
    objects: {
      juegos: Prisma.$juegosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_fra: number
      nom_fra: string
      des_fra: string | null
    }, ExtArgs["result"]["franquicias"]>
    composites: {}
  }

  type franquiciasGetPayload<S extends boolean | null | undefined | franquiciasDefaultArgs> = $Result.GetResult<Prisma.$franquiciasPayload, S>

  type franquiciasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<franquiciasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FranquiciasCountAggregateInputType | true
    }

  export interface franquiciasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['franquicias'], meta: { name: 'franquicias' } }
    /**
     * Find zero or one Franquicias that matches the filter.
     * @param {franquiciasFindUniqueArgs} args - Arguments to find a Franquicias
     * @example
     * // Get one Franquicias
     * const franquicias = await prisma.franquicias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends franquiciasFindUniqueArgs>(args: SelectSubset<T, franquiciasFindUniqueArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Franquicias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {franquiciasFindUniqueOrThrowArgs} args - Arguments to find a Franquicias
     * @example
     * // Get one Franquicias
     * const franquicias = await prisma.franquicias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends franquiciasFindUniqueOrThrowArgs>(args: SelectSubset<T, franquiciasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Franquicias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {franquiciasFindFirstArgs} args - Arguments to find a Franquicias
     * @example
     * // Get one Franquicias
     * const franquicias = await prisma.franquicias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends franquiciasFindFirstArgs>(args?: SelectSubset<T, franquiciasFindFirstArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Franquicias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {franquiciasFindFirstOrThrowArgs} args - Arguments to find a Franquicias
     * @example
     * // Get one Franquicias
     * const franquicias = await prisma.franquicias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends franquiciasFindFirstOrThrowArgs>(args?: SelectSubset<T, franquiciasFindFirstOrThrowArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Franquicias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {franquiciasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Franquicias
     * const franquicias = await prisma.franquicias.findMany()
     * 
     * // Get first 10 Franquicias
     * const franquicias = await prisma.franquicias.findMany({ take: 10 })
     * 
     * // Only select the `id_fra`
     * const franquiciasWithId_fraOnly = await prisma.franquicias.findMany({ select: { id_fra: true } })
     * 
     */
    findMany<T extends franquiciasFindManyArgs>(args?: SelectSubset<T, franquiciasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Franquicias.
     * @param {franquiciasCreateArgs} args - Arguments to create a Franquicias.
     * @example
     * // Create one Franquicias
     * const Franquicias = await prisma.franquicias.create({
     *   data: {
     *     // ... data to create a Franquicias
     *   }
     * })
     * 
     */
    create<T extends franquiciasCreateArgs>(args: SelectSubset<T, franquiciasCreateArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Franquicias.
     * @param {franquiciasCreateManyArgs} args - Arguments to create many Franquicias.
     * @example
     * // Create many Franquicias
     * const franquicias = await prisma.franquicias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends franquiciasCreateManyArgs>(args?: SelectSubset<T, franquiciasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Franquicias and returns the data saved in the database.
     * @param {franquiciasCreateManyAndReturnArgs} args - Arguments to create many Franquicias.
     * @example
     * // Create many Franquicias
     * const franquicias = await prisma.franquicias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Franquicias and only return the `id_fra`
     * const franquiciasWithId_fraOnly = await prisma.franquicias.createManyAndReturn({
     *   select: { id_fra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends franquiciasCreateManyAndReturnArgs>(args?: SelectSubset<T, franquiciasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Franquicias.
     * @param {franquiciasDeleteArgs} args - Arguments to delete one Franquicias.
     * @example
     * // Delete one Franquicias
     * const Franquicias = await prisma.franquicias.delete({
     *   where: {
     *     // ... filter to delete one Franquicias
     *   }
     * })
     * 
     */
    delete<T extends franquiciasDeleteArgs>(args: SelectSubset<T, franquiciasDeleteArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Franquicias.
     * @param {franquiciasUpdateArgs} args - Arguments to update one Franquicias.
     * @example
     * // Update one Franquicias
     * const franquicias = await prisma.franquicias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends franquiciasUpdateArgs>(args: SelectSubset<T, franquiciasUpdateArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Franquicias.
     * @param {franquiciasDeleteManyArgs} args - Arguments to filter Franquicias to delete.
     * @example
     * // Delete a few Franquicias
     * const { count } = await prisma.franquicias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends franquiciasDeleteManyArgs>(args?: SelectSubset<T, franquiciasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Franquicias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {franquiciasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Franquicias
     * const franquicias = await prisma.franquicias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends franquiciasUpdateManyArgs>(args: SelectSubset<T, franquiciasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Franquicias and returns the data updated in the database.
     * @param {franquiciasUpdateManyAndReturnArgs} args - Arguments to update many Franquicias.
     * @example
     * // Update many Franquicias
     * const franquicias = await prisma.franquicias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Franquicias and only return the `id_fra`
     * const franquiciasWithId_fraOnly = await prisma.franquicias.updateManyAndReturn({
     *   select: { id_fra: true },
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
    updateManyAndReturn<T extends franquiciasUpdateManyAndReturnArgs>(args: SelectSubset<T, franquiciasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Franquicias.
     * @param {franquiciasUpsertArgs} args - Arguments to update or create a Franquicias.
     * @example
     * // Update or create a Franquicias
     * const franquicias = await prisma.franquicias.upsert({
     *   create: {
     *     // ... data to create a Franquicias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Franquicias we want to update
     *   }
     * })
     */
    upsert<T extends franquiciasUpsertArgs>(args: SelectSubset<T, franquiciasUpsertArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Franquicias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {franquiciasCountArgs} args - Arguments to filter Franquicias to count.
     * @example
     * // Count the number of Franquicias
     * const count = await prisma.franquicias.count({
     *   where: {
     *     // ... the filter for the Franquicias we want to count
     *   }
     * })
    **/
    count<T extends franquiciasCountArgs>(
      args?: Subset<T, franquiciasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FranquiciasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Franquicias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranquiciasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FranquiciasAggregateArgs>(args: Subset<T, FranquiciasAggregateArgs>): Prisma.PrismaPromise<GetFranquiciasAggregateType<T>>

    /**
     * Group by Franquicias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {franquiciasGroupByArgs} args - Group by arguments.
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
      T extends franquiciasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: franquiciasGroupByArgs['orderBy'] }
        : { orderBy?: franquiciasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, franquiciasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranquiciasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the franquicias model
   */
  readonly fields: franquiciasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for franquicias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__franquiciasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends franquicias$juegosArgs<ExtArgs> = {}>(args?: Subset<T, franquicias$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the franquicias model
   */
  interface franquiciasFieldRefs {
    readonly id_fra: FieldRef<"franquicias", 'Int'>
    readonly nom_fra: FieldRef<"franquicias", 'String'>
    readonly des_fra: FieldRef<"franquicias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * franquicias findUnique
   */
  export type franquiciasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * Filter, which franquicias to fetch.
     */
    where: franquiciasWhereUniqueInput
  }

  /**
   * franquicias findUniqueOrThrow
   */
  export type franquiciasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * Filter, which franquicias to fetch.
     */
    where: franquiciasWhereUniqueInput
  }

  /**
   * franquicias findFirst
   */
  export type franquiciasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * Filter, which franquicias to fetch.
     */
    where?: franquiciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of franquicias to fetch.
     */
    orderBy?: franquiciasOrderByWithRelationInput | franquiciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for franquicias.
     */
    cursor?: franquiciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` franquicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` franquicias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of franquicias.
     */
    distinct?: FranquiciasScalarFieldEnum | FranquiciasScalarFieldEnum[]
  }

  /**
   * franquicias findFirstOrThrow
   */
  export type franquiciasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * Filter, which franquicias to fetch.
     */
    where?: franquiciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of franquicias to fetch.
     */
    orderBy?: franquiciasOrderByWithRelationInput | franquiciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for franquicias.
     */
    cursor?: franquiciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` franquicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` franquicias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of franquicias.
     */
    distinct?: FranquiciasScalarFieldEnum | FranquiciasScalarFieldEnum[]
  }

  /**
   * franquicias findMany
   */
  export type franquiciasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * Filter, which franquicias to fetch.
     */
    where?: franquiciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of franquicias to fetch.
     */
    orderBy?: franquiciasOrderByWithRelationInput | franquiciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing franquicias.
     */
    cursor?: franquiciasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` franquicias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` franquicias.
     */
    skip?: number
    distinct?: FranquiciasScalarFieldEnum | FranquiciasScalarFieldEnum[]
  }

  /**
   * franquicias create
   */
  export type franquiciasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * The data needed to create a franquicias.
     */
    data: XOR<franquiciasCreateInput, franquiciasUncheckedCreateInput>
  }

  /**
   * franquicias createMany
   */
  export type franquiciasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many franquicias.
     */
    data: franquiciasCreateManyInput | franquiciasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * franquicias createManyAndReturn
   */
  export type franquiciasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * The data used to create many franquicias.
     */
    data: franquiciasCreateManyInput | franquiciasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * franquicias update
   */
  export type franquiciasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * The data needed to update a franquicias.
     */
    data: XOR<franquiciasUpdateInput, franquiciasUncheckedUpdateInput>
    /**
     * Choose, which franquicias to update.
     */
    where: franquiciasWhereUniqueInput
  }

  /**
   * franquicias updateMany
   */
  export type franquiciasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update franquicias.
     */
    data: XOR<franquiciasUpdateManyMutationInput, franquiciasUncheckedUpdateManyInput>
    /**
     * Filter which franquicias to update
     */
    where?: franquiciasWhereInput
    /**
     * Limit how many franquicias to update.
     */
    limit?: number
  }

  /**
   * franquicias updateManyAndReturn
   */
  export type franquiciasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * The data used to update franquicias.
     */
    data: XOR<franquiciasUpdateManyMutationInput, franquiciasUncheckedUpdateManyInput>
    /**
     * Filter which franquicias to update
     */
    where?: franquiciasWhereInput
    /**
     * Limit how many franquicias to update.
     */
    limit?: number
  }

  /**
   * franquicias upsert
   */
  export type franquiciasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * The filter to search for the franquicias to update in case it exists.
     */
    where: franquiciasWhereUniqueInput
    /**
     * In case the franquicias found by the `where` argument doesn't exist, create a new franquicias with this data.
     */
    create: XOR<franquiciasCreateInput, franquiciasUncheckedCreateInput>
    /**
     * In case the franquicias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<franquiciasUpdateInput, franquiciasUncheckedUpdateInput>
  }

  /**
   * franquicias delete
   */
  export type franquiciasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    /**
     * Filter which franquicias to delete.
     */
    where: franquiciasWhereUniqueInput
  }

  /**
   * franquicias deleteMany
   */
  export type franquiciasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which franquicias to delete
     */
    where?: franquiciasWhereInput
    /**
     * Limit how many franquicias to delete.
     */
    limit?: number
  }

  /**
   * franquicias.juegos
   */
  export type franquicias$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    where?: juegosWhereInput
    orderBy?: juegosOrderByWithRelationInput | juegosOrderByWithRelationInput[]
    cursor?: juegosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * franquicias without action
   */
  export type franquiciasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
  }


  /**
   * Model hardware
   */

  export type AggregateHardware = {
    _count: HardwareCountAggregateOutputType | null
    _avg: HardwareAvgAggregateOutputType | null
    _sum: HardwareSumAggregateOutputType | null
    _min: HardwareMinAggregateOutputType | null
    _max: HardwareMaxAggregateOutputType | null
  }

  export type HardwareAvgAggregateOutputType = {
    id_har: number | null
    id_mar: number | null
  }

  export type HardwareSumAggregateOutputType = {
    id_har: number | null
    id_mar: number | null
  }

  export type HardwareMinAggregateOutputType = {
    id_har: number | null
    cod_har: string | null
    nom_har: string | null
    tipo_har: string | null
    des_har: string | null
    img_har: string | null
    url_har: string | null
    specs_har: string | null
    id_mar: number | null
  }

  export type HardwareMaxAggregateOutputType = {
    id_har: number | null
    cod_har: string | null
    nom_har: string | null
    tipo_har: string | null
    des_har: string | null
    img_har: string | null
    url_har: string | null
    specs_har: string | null
    id_mar: number | null
  }

  export type HardwareCountAggregateOutputType = {
    id_har: number
    cod_har: number
    nom_har: number
    tipo_har: number
    des_har: number
    img_har: number
    url_har: number
    specs_har: number
    id_mar: number
    _all: number
  }


  export type HardwareAvgAggregateInputType = {
    id_har?: true
    id_mar?: true
  }

  export type HardwareSumAggregateInputType = {
    id_har?: true
    id_mar?: true
  }

  export type HardwareMinAggregateInputType = {
    id_har?: true
    cod_har?: true
    nom_har?: true
    tipo_har?: true
    des_har?: true
    img_har?: true
    url_har?: true
    specs_har?: true
    id_mar?: true
  }

  export type HardwareMaxAggregateInputType = {
    id_har?: true
    cod_har?: true
    nom_har?: true
    tipo_har?: true
    des_har?: true
    img_har?: true
    url_har?: true
    specs_har?: true
    id_mar?: true
  }

  export type HardwareCountAggregateInputType = {
    id_har?: true
    cod_har?: true
    nom_har?: true
    tipo_har?: true
    des_har?: true
    img_har?: true
    url_har?: true
    specs_har?: true
    id_mar?: true
    _all?: true
  }

  export type HardwareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hardware to aggregate.
     */
    where?: hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hardware to fetch.
     */
    orderBy?: hardwareOrderByWithRelationInput | hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hardware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hardware
    **/
    _count?: true | HardwareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HardwareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HardwareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HardwareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HardwareMaxAggregateInputType
  }

  export type GetHardwareAggregateType<T extends HardwareAggregateArgs> = {
        [P in keyof T & keyof AggregateHardware]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHardware[P]>
      : GetScalarType<T[P], AggregateHardware[P]>
  }




  export type hardwareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hardwareWhereInput
    orderBy?: hardwareOrderByWithAggregationInput | hardwareOrderByWithAggregationInput[]
    by: HardwareScalarFieldEnum[] | HardwareScalarFieldEnum
    having?: hardwareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HardwareCountAggregateInputType | true
    _avg?: HardwareAvgAggregateInputType
    _sum?: HardwareSumAggregateInputType
    _min?: HardwareMinAggregateInputType
    _max?: HardwareMaxAggregateInputType
  }

  export type HardwareGroupByOutputType = {
    id_har: number
    cod_har: string
    nom_har: string
    tipo_har: string | null
    des_har: string | null
    img_har: string | null
    url_har: string | null
    specs_har: string | null
    id_mar: number | null
    _count: HardwareCountAggregateOutputType | null
    _avg: HardwareAvgAggregateOutputType | null
    _sum: HardwareSumAggregateOutputType | null
    _min: HardwareMinAggregateOutputType | null
    _max: HardwareMaxAggregateOutputType | null
  }

  type GetHardwareGroupByPayload<T extends hardwareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HardwareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HardwareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HardwareGroupByOutputType[P]>
            : GetScalarType<T[P], HardwareGroupByOutputType[P]>
        }
      >
    >


  export type hardwareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_har?: boolean
    cod_har?: boolean
    nom_har?: boolean
    tipo_har?: boolean
    des_har?: boolean
    img_har?: boolean
    url_har?: boolean
    specs_har?: boolean
    id_mar?: boolean
    marcas?: boolean | hardware$marcasArgs<ExtArgs>
  }, ExtArgs["result"]["hardware"]>

  export type hardwareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_har?: boolean
    cod_har?: boolean
    nom_har?: boolean
    tipo_har?: boolean
    des_har?: boolean
    img_har?: boolean
    url_har?: boolean
    specs_har?: boolean
    id_mar?: boolean
    marcas?: boolean | hardware$marcasArgs<ExtArgs>
  }, ExtArgs["result"]["hardware"]>

  export type hardwareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_har?: boolean
    cod_har?: boolean
    nom_har?: boolean
    tipo_har?: boolean
    des_har?: boolean
    img_har?: boolean
    url_har?: boolean
    specs_har?: boolean
    id_mar?: boolean
    marcas?: boolean | hardware$marcasArgs<ExtArgs>
  }, ExtArgs["result"]["hardware"]>

  export type hardwareSelectScalar = {
    id_har?: boolean
    cod_har?: boolean
    nom_har?: boolean
    tipo_har?: boolean
    des_har?: boolean
    img_har?: boolean
    url_har?: boolean
    specs_har?: boolean
    id_mar?: boolean
  }

  export type hardwareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_har" | "cod_har" | "nom_har" | "tipo_har" | "des_har" | "img_har" | "url_har" | "specs_har" | "id_mar", ExtArgs["result"]["hardware"]>
  export type hardwareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marcas?: boolean | hardware$marcasArgs<ExtArgs>
  }
  export type hardwareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marcas?: boolean | hardware$marcasArgs<ExtArgs>
  }
  export type hardwareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marcas?: boolean | hardware$marcasArgs<ExtArgs>
  }

  export type $hardwarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hardware"
    objects: {
      marcas: Prisma.$marcasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_har: number
      cod_har: string
      nom_har: string
      tipo_har: string | null
      des_har: string | null
      img_har: string | null
      url_har: string | null
      specs_har: string | null
      id_mar: number | null
    }, ExtArgs["result"]["hardware"]>
    composites: {}
  }

  type hardwareGetPayload<S extends boolean | null | undefined | hardwareDefaultArgs> = $Result.GetResult<Prisma.$hardwarePayload, S>

  type hardwareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hardwareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HardwareCountAggregateInputType | true
    }

  export interface hardwareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hardware'], meta: { name: 'hardware' } }
    /**
     * Find zero or one Hardware that matches the filter.
     * @param {hardwareFindUniqueArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hardwareFindUniqueArgs>(args: SelectSubset<T, hardwareFindUniqueArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hardware that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hardwareFindUniqueOrThrowArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hardwareFindUniqueOrThrowArgs>(args: SelectSubset<T, hardwareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hardware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hardwareFindFirstArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hardwareFindFirstArgs>(args?: SelectSubset<T, hardwareFindFirstArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hardware that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hardwareFindFirstOrThrowArgs} args - Arguments to find a Hardware
     * @example
     * // Get one Hardware
     * const hardware = await prisma.hardware.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hardwareFindFirstOrThrowArgs>(args?: SelectSubset<T, hardwareFindFirstOrThrowArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hardware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hardwareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hardware
     * const hardware = await prisma.hardware.findMany()
     * 
     * // Get first 10 Hardware
     * const hardware = await prisma.hardware.findMany({ take: 10 })
     * 
     * // Only select the `id_har`
     * const hardwareWithId_harOnly = await prisma.hardware.findMany({ select: { id_har: true } })
     * 
     */
    findMany<T extends hardwareFindManyArgs>(args?: SelectSubset<T, hardwareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hardware.
     * @param {hardwareCreateArgs} args - Arguments to create a Hardware.
     * @example
     * // Create one Hardware
     * const Hardware = await prisma.hardware.create({
     *   data: {
     *     // ... data to create a Hardware
     *   }
     * })
     * 
     */
    create<T extends hardwareCreateArgs>(args: SelectSubset<T, hardwareCreateArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hardware.
     * @param {hardwareCreateManyArgs} args - Arguments to create many Hardware.
     * @example
     * // Create many Hardware
     * const hardware = await prisma.hardware.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hardwareCreateManyArgs>(args?: SelectSubset<T, hardwareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hardware and returns the data saved in the database.
     * @param {hardwareCreateManyAndReturnArgs} args - Arguments to create many Hardware.
     * @example
     * // Create many Hardware
     * const hardware = await prisma.hardware.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hardware and only return the `id_har`
     * const hardwareWithId_harOnly = await prisma.hardware.createManyAndReturn({
     *   select: { id_har: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hardwareCreateManyAndReturnArgs>(args?: SelectSubset<T, hardwareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hardware.
     * @param {hardwareDeleteArgs} args - Arguments to delete one Hardware.
     * @example
     * // Delete one Hardware
     * const Hardware = await prisma.hardware.delete({
     *   where: {
     *     // ... filter to delete one Hardware
     *   }
     * })
     * 
     */
    delete<T extends hardwareDeleteArgs>(args: SelectSubset<T, hardwareDeleteArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hardware.
     * @param {hardwareUpdateArgs} args - Arguments to update one Hardware.
     * @example
     * // Update one Hardware
     * const hardware = await prisma.hardware.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hardwareUpdateArgs>(args: SelectSubset<T, hardwareUpdateArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hardware.
     * @param {hardwareDeleteManyArgs} args - Arguments to filter Hardware to delete.
     * @example
     * // Delete a few Hardware
     * const { count } = await prisma.hardware.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hardwareDeleteManyArgs>(args?: SelectSubset<T, hardwareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hardwareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hardware
     * const hardware = await prisma.hardware.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hardwareUpdateManyArgs>(args: SelectSubset<T, hardwareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hardware and returns the data updated in the database.
     * @param {hardwareUpdateManyAndReturnArgs} args - Arguments to update many Hardware.
     * @example
     * // Update many Hardware
     * const hardware = await prisma.hardware.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hardware and only return the `id_har`
     * const hardwareWithId_harOnly = await prisma.hardware.updateManyAndReturn({
     *   select: { id_har: true },
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
    updateManyAndReturn<T extends hardwareUpdateManyAndReturnArgs>(args: SelectSubset<T, hardwareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hardware.
     * @param {hardwareUpsertArgs} args - Arguments to update or create a Hardware.
     * @example
     * // Update or create a Hardware
     * const hardware = await prisma.hardware.upsert({
     *   create: {
     *     // ... data to create a Hardware
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hardware we want to update
     *   }
     * })
     */
    upsert<T extends hardwareUpsertArgs>(args: SelectSubset<T, hardwareUpsertArgs<ExtArgs>>): Prisma__hardwareClient<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hardwareCountArgs} args - Arguments to filter Hardware to count.
     * @example
     * // Count the number of Hardware
     * const count = await prisma.hardware.count({
     *   where: {
     *     // ... the filter for the Hardware we want to count
     *   }
     * })
    **/
    count<T extends hardwareCountArgs>(
      args?: Subset<T, hardwareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HardwareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HardwareAggregateArgs>(args: Subset<T, HardwareAggregateArgs>): Prisma.PrismaPromise<GetHardwareAggregateType<T>>

    /**
     * Group by Hardware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hardwareGroupByArgs} args - Group by arguments.
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
      T extends hardwareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hardwareGroupByArgs['orderBy'] }
        : { orderBy?: hardwareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hardwareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHardwareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hardware model
   */
  readonly fields: hardwareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hardware.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hardwareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marcas<T extends hardware$marcasArgs<ExtArgs> = {}>(args?: Subset<T, hardware$marcasArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the hardware model
   */
  interface hardwareFieldRefs {
    readonly id_har: FieldRef<"hardware", 'Int'>
    readonly cod_har: FieldRef<"hardware", 'String'>
    readonly nom_har: FieldRef<"hardware", 'String'>
    readonly tipo_har: FieldRef<"hardware", 'String'>
    readonly des_har: FieldRef<"hardware", 'String'>
    readonly img_har: FieldRef<"hardware", 'String'>
    readonly url_har: FieldRef<"hardware", 'String'>
    readonly specs_har: FieldRef<"hardware", 'String'>
    readonly id_mar: FieldRef<"hardware", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hardware findUnique
   */
  export type hardwareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * Filter, which hardware to fetch.
     */
    where: hardwareWhereUniqueInput
  }

  /**
   * hardware findUniqueOrThrow
   */
  export type hardwareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * Filter, which hardware to fetch.
     */
    where: hardwareWhereUniqueInput
  }

  /**
   * hardware findFirst
   */
  export type hardwareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * Filter, which hardware to fetch.
     */
    where?: hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hardware to fetch.
     */
    orderBy?: hardwareOrderByWithRelationInput | hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hardware.
     */
    cursor?: hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hardware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hardware.
     */
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * hardware findFirstOrThrow
   */
  export type hardwareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * Filter, which hardware to fetch.
     */
    where?: hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hardware to fetch.
     */
    orderBy?: hardwareOrderByWithRelationInput | hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hardware.
     */
    cursor?: hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hardware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hardware.
     */
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * hardware findMany
   */
  export type hardwareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * Filter, which hardware to fetch.
     */
    where?: hardwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hardware to fetch.
     */
    orderBy?: hardwareOrderByWithRelationInput | hardwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hardware.
     */
    cursor?: hardwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hardware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hardware.
     */
    skip?: number
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * hardware create
   */
  export type hardwareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * The data needed to create a hardware.
     */
    data: XOR<hardwareCreateInput, hardwareUncheckedCreateInput>
  }

  /**
   * hardware createMany
   */
  export type hardwareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hardware.
     */
    data: hardwareCreateManyInput | hardwareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hardware createManyAndReturn
   */
  export type hardwareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * The data used to create many hardware.
     */
    data: hardwareCreateManyInput | hardwareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hardware update
   */
  export type hardwareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * The data needed to update a hardware.
     */
    data: XOR<hardwareUpdateInput, hardwareUncheckedUpdateInput>
    /**
     * Choose, which hardware to update.
     */
    where: hardwareWhereUniqueInput
  }

  /**
   * hardware updateMany
   */
  export type hardwareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hardware.
     */
    data: XOR<hardwareUpdateManyMutationInput, hardwareUncheckedUpdateManyInput>
    /**
     * Filter which hardware to update
     */
    where?: hardwareWhereInput
    /**
     * Limit how many hardware to update.
     */
    limit?: number
  }

  /**
   * hardware updateManyAndReturn
   */
  export type hardwareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * The data used to update hardware.
     */
    data: XOR<hardwareUpdateManyMutationInput, hardwareUncheckedUpdateManyInput>
    /**
     * Filter which hardware to update
     */
    where?: hardwareWhereInput
    /**
     * Limit how many hardware to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hardware upsert
   */
  export type hardwareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * The filter to search for the hardware to update in case it exists.
     */
    where: hardwareWhereUniqueInput
    /**
     * In case the hardware found by the `where` argument doesn't exist, create a new hardware with this data.
     */
    create: XOR<hardwareCreateInput, hardwareUncheckedCreateInput>
    /**
     * In case the hardware was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hardwareUpdateInput, hardwareUncheckedUpdateInput>
  }

  /**
   * hardware delete
   */
  export type hardwareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    /**
     * Filter which hardware to delete.
     */
    where: hardwareWhereUniqueInput
  }

  /**
   * hardware deleteMany
   */
  export type hardwareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hardware to delete
     */
    where?: hardwareWhereInput
    /**
     * Limit how many hardware to delete.
     */
    limit?: number
  }

  /**
   * hardware.marcas
   */
  export type hardware$marcasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    where?: marcasWhereInput
  }

  /**
   * hardware without action
   */
  export type hardwareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
  }


  /**
   * Model juegos
   */

  export type AggregateJuegos = {
    _count: JuegosCountAggregateOutputType | null
    _avg: JuegosAvgAggregateOutputType | null
    _sum: JuegosSumAggregateOutputType | null
    _min: JuegosMinAggregateOutputType | null
    _max: JuegosMaxAggregateOutputType | null
  }

  export type JuegosAvgAggregateOutputType = {
    id_jue: number | null
    pre_ori_jue: Decimal | null
    pre_ofe_jue: Decimal | null
    porc_desc_jue: Decimal | null
    id_fra: number | null
    id_cat: number | null
  }

  export type JuegosSumAggregateOutputType = {
    id_jue: number | null
    pre_ori_jue: Decimal | null
    pre_ofe_jue: Decimal | null
    porc_desc_jue: Decimal | null
    id_fra: number | null
    id_cat: number | null
  }

  export type JuegosMinAggregateOutputType = {
    id_jue: number | null
    nom_jue: string | null
    des_jue: string | null
    pre_ori_jue: Decimal | null
    pre_ofe_jue: Decimal | null
    porc_desc_jue: Decimal | null
    img_jue: string | null
    id_fra: number | null
    id_cat: number | null
  }

  export type JuegosMaxAggregateOutputType = {
    id_jue: number | null
    nom_jue: string | null
    des_jue: string | null
    pre_ori_jue: Decimal | null
    pre_ofe_jue: Decimal | null
    porc_desc_jue: Decimal | null
    img_jue: string | null
    id_fra: number | null
    id_cat: number | null
  }

  export type JuegosCountAggregateOutputType = {
    id_jue: number
    nom_jue: number
    des_jue: number
    pre_ori_jue: number
    pre_ofe_jue: number
    porc_desc_jue: number
    img_jue: number
    id_fra: number
    id_cat: number
    _all: number
  }


  export type JuegosAvgAggregateInputType = {
    id_jue?: true
    pre_ori_jue?: true
    pre_ofe_jue?: true
    porc_desc_jue?: true
    id_fra?: true
    id_cat?: true
  }

  export type JuegosSumAggregateInputType = {
    id_jue?: true
    pre_ori_jue?: true
    pre_ofe_jue?: true
    porc_desc_jue?: true
    id_fra?: true
    id_cat?: true
  }

  export type JuegosMinAggregateInputType = {
    id_jue?: true
    nom_jue?: true
    des_jue?: true
    pre_ori_jue?: true
    pre_ofe_jue?: true
    porc_desc_jue?: true
    img_jue?: true
    id_fra?: true
    id_cat?: true
  }

  export type JuegosMaxAggregateInputType = {
    id_jue?: true
    nom_jue?: true
    des_jue?: true
    pre_ori_jue?: true
    pre_ofe_jue?: true
    porc_desc_jue?: true
    img_jue?: true
    id_fra?: true
    id_cat?: true
  }

  export type JuegosCountAggregateInputType = {
    id_jue?: true
    nom_jue?: true
    des_jue?: true
    pre_ori_jue?: true
    pre_ofe_jue?: true
    porc_desc_jue?: true
    img_jue?: true
    id_fra?: true
    id_cat?: true
    _all?: true
  }

  export type JuegosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which juegos to aggregate.
     */
    where?: juegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juegos to fetch.
     */
    orderBy?: juegosOrderByWithRelationInput | juegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: juegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned juegos
    **/
    _count?: true | JuegosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegosMaxAggregateInputType
  }

  export type GetJuegosAggregateType<T extends JuegosAggregateArgs> = {
        [P in keyof T & keyof AggregateJuegos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuegos[P]>
      : GetScalarType<T[P], AggregateJuegos[P]>
  }




  export type juegosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juegosWhereInput
    orderBy?: juegosOrderByWithAggregationInput | juegosOrderByWithAggregationInput[]
    by: JuegosScalarFieldEnum[] | JuegosScalarFieldEnum
    having?: juegosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegosCountAggregateInputType | true
    _avg?: JuegosAvgAggregateInputType
    _sum?: JuegosSumAggregateInputType
    _min?: JuegosMinAggregateInputType
    _max?: JuegosMaxAggregateInputType
  }

  export type JuegosGroupByOutputType = {
    id_jue: number
    nom_jue: string
    des_jue: string
    pre_ori_jue: Decimal | null
    pre_ofe_jue: Decimal | null
    porc_desc_jue: Decimal | null
    img_jue: string | null
    id_fra: number | null
    id_cat: number | null
    _count: JuegosCountAggregateOutputType | null
    _avg: JuegosAvgAggregateOutputType | null
    _sum: JuegosSumAggregateOutputType | null
    _min: JuegosMinAggregateOutputType | null
    _max: JuegosMaxAggregateOutputType | null
  }

  type GetJuegosGroupByPayload<T extends juegosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegosGroupByOutputType[P]>
            : GetScalarType<T[P], JuegosGroupByOutputType[P]>
        }
      >
    >


  export type juegosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_jue?: boolean
    nom_jue?: boolean
    des_jue?: boolean
    pre_ori_jue?: boolean
    pre_ofe_jue?: boolean
    porc_desc_jue?: boolean
    img_jue?: boolean
    id_fra?: boolean
    id_cat?: boolean
    categorias?: boolean | juegos$categoriasArgs<ExtArgs>
    franquicias?: boolean | juegos$franquiciasArgs<ExtArgs>
  }, ExtArgs["result"]["juegos"]>

  export type juegosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_jue?: boolean
    nom_jue?: boolean
    des_jue?: boolean
    pre_ori_jue?: boolean
    pre_ofe_jue?: boolean
    porc_desc_jue?: boolean
    img_jue?: boolean
    id_fra?: boolean
    id_cat?: boolean
    categorias?: boolean | juegos$categoriasArgs<ExtArgs>
    franquicias?: boolean | juegos$franquiciasArgs<ExtArgs>
  }, ExtArgs["result"]["juegos"]>

  export type juegosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_jue?: boolean
    nom_jue?: boolean
    des_jue?: boolean
    pre_ori_jue?: boolean
    pre_ofe_jue?: boolean
    porc_desc_jue?: boolean
    img_jue?: boolean
    id_fra?: boolean
    id_cat?: boolean
    categorias?: boolean | juegos$categoriasArgs<ExtArgs>
    franquicias?: boolean | juegos$franquiciasArgs<ExtArgs>
  }, ExtArgs["result"]["juegos"]>

  export type juegosSelectScalar = {
    id_jue?: boolean
    nom_jue?: boolean
    des_jue?: boolean
    pre_ori_jue?: boolean
    pre_ofe_jue?: boolean
    porc_desc_jue?: boolean
    img_jue?: boolean
    id_fra?: boolean
    id_cat?: boolean
  }

  export type juegosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_jue" | "nom_jue" | "des_jue" | "pre_ori_jue" | "pre_ofe_jue" | "porc_desc_jue" | "img_jue" | "id_fra" | "id_cat", ExtArgs["result"]["juegos"]>
  export type juegosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | juegos$categoriasArgs<ExtArgs>
    franquicias?: boolean | juegos$franquiciasArgs<ExtArgs>
  }
  export type juegosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | juegos$categoriasArgs<ExtArgs>
    franquicias?: boolean | juegos$franquiciasArgs<ExtArgs>
  }
  export type juegosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | juegos$categoriasArgs<ExtArgs>
    franquicias?: boolean | juegos$franquiciasArgs<ExtArgs>
  }

  export type $juegosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "juegos"
    objects: {
      categorias: Prisma.$categoriasPayload<ExtArgs> | null
      franquicias: Prisma.$franquiciasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_jue: number
      nom_jue: string
      des_jue: string
      pre_ori_jue: Prisma.Decimal | null
      pre_ofe_jue: Prisma.Decimal | null
      porc_desc_jue: Prisma.Decimal | null
      img_jue: string | null
      id_fra: number | null
      id_cat: number | null
    }, ExtArgs["result"]["juegos"]>
    composites: {}
  }

  type juegosGetPayload<S extends boolean | null | undefined | juegosDefaultArgs> = $Result.GetResult<Prisma.$juegosPayload, S>

  type juegosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<juegosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegosCountAggregateInputType | true
    }

  export interface juegosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['juegos'], meta: { name: 'juegos' } }
    /**
     * Find zero or one Juegos that matches the filter.
     * @param {juegosFindUniqueArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends juegosFindUniqueArgs>(args: SelectSubset<T, juegosFindUniqueArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juegos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {juegosFindUniqueOrThrowArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends juegosFindUniqueOrThrowArgs>(args: SelectSubset<T, juegosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juegosFindFirstArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends juegosFindFirstArgs>(args?: SelectSubset<T, juegosFindFirstArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juegos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juegosFindFirstOrThrowArgs} args - Arguments to find a Juegos
     * @example
     * // Get one Juegos
     * const juegos = await prisma.juegos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends juegosFindFirstOrThrowArgs>(args?: SelectSubset<T, juegosFindFirstOrThrowArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juegosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juegos
     * const juegos = await prisma.juegos.findMany()
     * 
     * // Get first 10 Juegos
     * const juegos = await prisma.juegos.findMany({ take: 10 })
     * 
     * // Only select the `id_jue`
     * const juegosWithId_jueOnly = await prisma.juegos.findMany({ select: { id_jue: true } })
     * 
     */
    findMany<T extends juegosFindManyArgs>(args?: SelectSubset<T, juegosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juegos.
     * @param {juegosCreateArgs} args - Arguments to create a Juegos.
     * @example
     * // Create one Juegos
     * const Juegos = await prisma.juegos.create({
     *   data: {
     *     // ... data to create a Juegos
     *   }
     * })
     * 
     */
    create<T extends juegosCreateArgs>(args: SelectSubset<T, juegosCreateArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juegos.
     * @param {juegosCreateManyArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juegos = await prisma.juegos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends juegosCreateManyArgs>(args?: SelectSubset<T, juegosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juegos and returns the data saved in the database.
     * @param {juegosCreateManyAndReturnArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juegos = await prisma.juegos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juegos and only return the `id_jue`
     * const juegosWithId_jueOnly = await prisma.juegos.createManyAndReturn({
     *   select: { id_jue: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends juegosCreateManyAndReturnArgs>(args?: SelectSubset<T, juegosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Juegos.
     * @param {juegosDeleteArgs} args - Arguments to delete one Juegos.
     * @example
     * // Delete one Juegos
     * const Juegos = await prisma.juegos.delete({
     *   where: {
     *     // ... filter to delete one Juegos
     *   }
     * })
     * 
     */
    delete<T extends juegosDeleteArgs>(args: SelectSubset<T, juegosDeleteArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juegos.
     * @param {juegosUpdateArgs} args - Arguments to update one Juegos.
     * @example
     * // Update one Juegos
     * const juegos = await prisma.juegos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends juegosUpdateArgs>(args: SelectSubset<T, juegosUpdateArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juegos.
     * @param {juegosDeleteManyArgs} args - Arguments to filter Juegos to delete.
     * @example
     * // Delete a few Juegos
     * const { count } = await prisma.juegos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends juegosDeleteManyArgs>(args?: SelectSubset<T, juegosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juegosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juegos
     * const juegos = await prisma.juegos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends juegosUpdateManyArgs>(args: SelectSubset<T, juegosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos and returns the data updated in the database.
     * @param {juegosUpdateManyAndReturnArgs} args - Arguments to update many Juegos.
     * @example
     * // Update many Juegos
     * const juegos = await prisma.juegos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juegos and only return the `id_jue`
     * const juegosWithId_jueOnly = await prisma.juegos.updateManyAndReturn({
     *   select: { id_jue: true },
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
    updateManyAndReturn<T extends juegosUpdateManyAndReturnArgs>(args: SelectSubset<T, juegosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Juegos.
     * @param {juegosUpsertArgs} args - Arguments to update or create a Juegos.
     * @example
     * // Update or create a Juegos
     * const juegos = await prisma.juegos.upsert({
     *   create: {
     *     // ... data to create a Juegos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juegos we want to update
     *   }
     * })
     */
    upsert<T extends juegosUpsertArgs>(args: SelectSubset<T, juegosUpsertArgs<ExtArgs>>): Prisma__juegosClient<$Result.GetResult<Prisma.$juegosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juegosCountArgs} args - Arguments to filter Juegos to count.
     * @example
     * // Count the number of Juegos
     * const count = await prisma.juegos.count({
     *   where: {
     *     // ... the filter for the Juegos we want to count
     *   }
     * })
    **/
    count<T extends juegosCountArgs>(
      args?: Subset<T, juegosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuegosAggregateArgs>(args: Subset<T, JuegosAggregateArgs>): Prisma.PrismaPromise<GetJuegosAggregateType<T>>

    /**
     * Group by Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juegosGroupByArgs} args - Group by arguments.
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
      T extends juegosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: juegosGroupByArgs['orderBy'] }
        : { orderBy?: juegosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, juegosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the juegos model
   */
  readonly fields: juegosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for juegos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__juegosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends juegos$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, juegos$categoriasArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    franquicias<T extends juegos$franquiciasArgs<ExtArgs> = {}>(args?: Subset<T, juegos$franquiciasArgs<ExtArgs>>): Prisma__franquiciasClient<$Result.GetResult<Prisma.$franquiciasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the juegos model
   */
  interface juegosFieldRefs {
    readonly id_jue: FieldRef<"juegos", 'Int'>
    readonly nom_jue: FieldRef<"juegos", 'String'>
    readonly des_jue: FieldRef<"juegos", 'String'>
    readonly pre_ori_jue: FieldRef<"juegos", 'Decimal'>
    readonly pre_ofe_jue: FieldRef<"juegos", 'Decimal'>
    readonly porc_desc_jue: FieldRef<"juegos", 'Decimal'>
    readonly img_jue: FieldRef<"juegos", 'String'>
    readonly id_fra: FieldRef<"juegos", 'Int'>
    readonly id_cat: FieldRef<"juegos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * juegos findUnique
   */
  export type juegosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * Filter, which juegos to fetch.
     */
    where: juegosWhereUniqueInput
  }

  /**
   * juegos findUniqueOrThrow
   */
  export type juegosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * Filter, which juegos to fetch.
     */
    where: juegosWhereUniqueInput
  }

  /**
   * juegos findFirst
   */
  export type juegosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * Filter, which juegos to fetch.
     */
    where?: juegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juegos to fetch.
     */
    orderBy?: juegosOrderByWithRelationInput | juegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for juegos.
     */
    cursor?: juegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of juegos.
     */
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * juegos findFirstOrThrow
   */
  export type juegosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * Filter, which juegos to fetch.
     */
    where?: juegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juegos to fetch.
     */
    orderBy?: juegosOrderByWithRelationInput | juegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for juegos.
     */
    cursor?: juegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of juegos.
     */
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * juegos findMany
   */
  export type juegosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * Filter, which juegos to fetch.
     */
    where?: juegosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of juegos to fetch.
     */
    orderBy?: juegosOrderByWithRelationInput | juegosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing juegos.
     */
    cursor?: juegosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` juegos.
     */
    skip?: number
    distinct?: JuegosScalarFieldEnum | JuegosScalarFieldEnum[]
  }

  /**
   * juegos create
   */
  export type juegosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * The data needed to create a juegos.
     */
    data: XOR<juegosCreateInput, juegosUncheckedCreateInput>
  }

  /**
   * juegos createMany
   */
  export type juegosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many juegos.
     */
    data: juegosCreateManyInput | juegosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * juegos createManyAndReturn
   */
  export type juegosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * The data used to create many juegos.
     */
    data: juegosCreateManyInput | juegosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * juegos update
   */
  export type juegosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * The data needed to update a juegos.
     */
    data: XOR<juegosUpdateInput, juegosUncheckedUpdateInput>
    /**
     * Choose, which juegos to update.
     */
    where: juegosWhereUniqueInput
  }

  /**
   * juegos updateMany
   */
  export type juegosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update juegos.
     */
    data: XOR<juegosUpdateManyMutationInput, juegosUncheckedUpdateManyInput>
    /**
     * Filter which juegos to update
     */
    where?: juegosWhereInput
    /**
     * Limit how many juegos to update.
     */
    limit?: number
  }

  /**
   * juegos updateManyAndReturn
   */
  export type juegosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * The data used to update juegos.
     */
    data: XOR<juegosUpdateManyMutationInput, juegosUncheckedUpdateManyInput>
    /**
     * Filter which juegos to update
     */
    where?: juegosWhereInput
    /**
     * Limit how many juegos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * juegos upsert
   */
  export type juegosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * The filter to search for the juegos to update in case it exists.
     */
    where: juegosWhereUniqueInput
    /**
     * In case the juegos found by the `where` argument doesn't exist, create a new juegos with this data.
     */
    create: XOR<juegosCreateInput, juegosUncheckedCreateInput>
    /**
     * In case the juegos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<juegosUpdateInput, juegosUncheckedUpdateInput>
  }

  /**
   * juegos delete
   */
  export type juegosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
    /**
     * Filter which juegos to delete.
     */
    where: juegosWhereUniqueInput
  }

  /**
   * juegos deleteMany
   */
  export type juegosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which juegos to delete
     */
    where?: juegosWhereInput
    /**
     * Limit how many juegos to delete.
     */
    limit?: number
  }

  /**
   * juegos.categorias
   */
  export type juegos$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * juegos.franquicias
   */
  export type juegos$franquiciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the franquicias
     */
    select?: franquiciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the franquicias
     */
    omit?: franquiciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: franquiciasInclude<ExtArgs> | null
    where?: franquiciasWhereInput
  }

  /**
   * juegos without action
   */
  export type juegosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the juegos
     */
    select?: juegosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the juegos
     */
    omit?: juegosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: juegosInclude<ExtArgs> | null
  }


  /**
   * Model marcas
   */

  export type AggregateMarcas = {
    _count: MarcasCountAggregateOutputType | null
    _avg: MarcasAvgAggregateOutputType | null
    _sum: MarcasSumAggregateOutputType | null
    _min: MarcasMinAggregateOutputType | null
    _max: MarcasMaxAggregateOutputType | null
  }

  export type MarcasAvgAggregateOutputType = {
    id_mar: number | null
  }

  export type MarcasSumAggregateOutputType = {
    id_mar: number | null
  }

  export type MarcasMinAggregateOutputType = {
    id_mar: number | null
    nom_mar: string | null
    des_mar: string | null
  }

  export type MarcasMaxAggregateOutputType = {
    id_mar: number | null
    nom_mar: string | null
    des_mar: string | null
  }

  export type MarcasCountAggregateOutputType = {
    id_mar: number
    nom_mar: number
    des_mar: number
    _all: number
  }


  export type MarcasAvgAggregateInputType = {
    id_mar?: true
  }

  export type MarcasSumAggregateInputType = {
    id_mar?: true
  }

  export type MarcasMinAggregateInputType = {
    id_mar?: true
    nom_mar?: true
    des_mar?: true
  }

  export type MarcasMaxAggregateInputType = {
    id_mar?: true
    nom_mar?: true
    des_mar?: true
  }

  export type MarcasCountAggregateInputType = {
    id_mar?: true
    nom_mar?: true
    des_mar?: true
    _all?: true
  }

  export type MarcasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marcas to aggregate.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned marcas
    **/
    _count?: true | MarcasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcasMaxAggregateInputType
  }

  export type GetMarcasAggregateType<T extends MarcasAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcas[P]>
      : GetScalarType<T[P], AggregateMarcas[P]>
  }




  export type marcasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marcasWhereInput
    orderBy?: marcasOrderByWithAggregationInput | marcasOrderByWithAggregationInput[]
    by: MarcasScalarFieldEnum[] | MarcasScalarFieldEnum
    having?: marcasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcasCountAggregateInputType | true
    _avg?: MarcasAvgAggregateInputType
    _sum?: MarcasSumAggregateInputType
    _min?: MarcasMinAggregateInputType
    _max?: MarcasMaxAggregateInputType
  }

  export type MarcasGroupByOutputType = {
    id_mar: number
    nom_mar: string
    des_mar: string | null
    _count: MarcasCountAggregateOutputType | null
    _avg: MarcasAvgAggregateOutputType | null
    _sum: MarcasSumAggregateOutputType | null
    _min: MarcasMinAggregateOutputType | null
    _max: MarcasMaxAggregateOutputType | null
  }

  type GetMarcasGroupByPayload<T extends marcasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcasGroupByOutputType[P]>
            : GetScalarType<T[P], MarcasGroupByOutputType[P]>
        }
      >
    >


  export type marcasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mar?: boolean
    nom_mar?: boolean
    des_mar?: boolean
    hardware?: boolean | marcas$hardwareArgs<ExtArgs>
    _count?: boolean | MarcasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marcas"]>

  export type marcasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mar?: boolean
    nom_mar?: boolean
    des_mar?: boolean
  }, ExtArgs["result"]["marcas"]>

  export type marcasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mar?: boolean
    nom_mar?: boolean
    des_mar?: boolean
  }, ExtArgs["result"]["marcas"]>

  export type marcasSelectScalar = {
    id_mar?: boolean
    nom_mar?: boolean
    des_mar?: boolean
  }

  export type marcasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mar" | "nom_mar" | "des_mar", ExtArgs["result"]["marcas"]>
  export type marcasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hardware?: boolean | marcas$hardwareArgs<ExtArgs>
    _count?: boolean | MarcasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type marcasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type marcasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $marcasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "marcas"
    objects: {
      hardware: Prisma.$hardwarePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mar: number
      nom_mar: string
      des_mar: string | null
    }, ExtArgs["result"]["marcas"]>
    composites: {}
  }

  type marcasGetPayload<S extends boolean | null | undefined | marcasDefaultArgs> = $Result.GetResult<Prisma.$marcasPayload, S>

  type marcasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<marcasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcasCountAggregateInputType | true
    }

  export interface marcasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['marcas'], meta: { name: 'marcas' } }
    /**
     * Find zero or one Marcas that matches the filter.
     * @param {marcasFindUniqueArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends marcasFindUniqueArgs>(args: SelectSubset<T, marcasFindUniqueArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marcas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {marcasFindUniqueOrThrowArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends marcasFindUniqueOrThrowArgs>(args: SelectSubset<T, marcasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasFindFirstArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends marcasFindFirstArgs>(args?: SelectSubset<T, marcasFindFirstArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marcas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasFindFirstOrThrowArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends marcasFindFirstOrThrowArgs>(args?: SelectSubset<T, marcasFindFirstOrThrowArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcas
     * const marcas = await prisma.marcas.findMany()
     * 
     * // Get first 10 Marcas
     * const marcas = await prisma.marcas.findMany({ take: 10 })
     * 
     * // Only select the `id_mar`
     * const marcasWithId_marOnly = await prisma.marcas.findMany({ select: { id_mar: true } })
     * 
     */
    findMany<T extends marcasFindManyArgs>(args?: SelectSubset<T, marcasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marcas.
     * @param {marcasCreateArgs} args - Arguments to create a Marcas.
     * @example
     * // Create one Marcas
     * const Marcas = await prisma.marcas.create({
     *   data: {
     *     // ... data to create a Marcas
     *   }
     * })
     * 
     */
    create<T extends marcasCreateArgs>(args: SelectSubset<T, marcasCreateArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcas.
     * @param {marcasCreateManyArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marcas = await prisma.marcas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends marcasCreateManyArgs>(args?: SelectSubset<T, marcasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcas and returns the data saved in the database.
     * @param {marcasCreateManyAndReturnArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marcas = await prisma.marcas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcas and only return the `id_mar`
     * const marcasWithId_marOnly = await prisma.marcas.createManyAndReturn({
     *   select: { id_mar: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends marcasCreateManyAndReturnArgs>(args?: SelectSubset<T, marcasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marcas.
     * @param {marcasDeleteArgs} args - Arguments to delete one Marcas.
     * @example
     * // Delete one Marcas
     * const Marcas = await prisma.marcas.delete({
     *   where: {
     *     // ... filter to delete one Marcas
     *   }
     * })
     * 
     */
    delete<T extends marcasDeleteArgs>(args: SelectSubset<T, marcasDeleteArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marcas.
     * @param {marcasUpdateArgs} args - Arguments to update one Marcas.
     * @example
     * // Update one Marcas
     * const marcas = await prisma.marcas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends marcasUpdateArgs>(args: SelectSubset<T, marcasUpdateArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcas.
     * @param {marcasDeleteManyArgs} args - Arguments to filter Marcas to delete.
     * @example
     * // Delete a few Marcas
     * const { count } = await prisma.marcas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends marcasDeleteManyArgs>(args?: SelectSubset<T, marcasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcas
     * const marcas = await prisma.marcas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends marcasUpdateManyArgs>(args: SelectSubset<T, marcasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas and returns the data updated in the database.
     * @param {marcasUpdateManyAndReturnArgs} args - Arguments to update many Marcas.
     * @example
     * // Update many Marcas
     * const marcas = await prisma.marcas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcas and only return the `id_mar`
     * const marcasWithId_marOnly = await prisma.marcas.updateManyAndReturn({
     *   select: { id_mar: true },
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
    updateManyAndReturn<T extends marcasUpdateManyAndReturnArgs>(args: SelectSubset<T, marcasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marcas.
     * @param {marcasUpsertArgs} args - Arguments to update or create a Marcas.
     * @example
     * // Update or create a Marcas
     * const marcas = await prisma.marcas.upsert({
     *   create: {
     *     // ... data to create a Marcas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marcas we want to update
     *   }
     * })
     */
    upsert<T extends marcasUpsertArgs>(args: SelectSubset<T, marcasUpsertArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasCountArgs} args - Arguments to filter Marcas to count.
     * @example
     * // Count the number of Marcas
     * const count = await prisma.marcas.count({
     *   where: {
     *     // ... the filter for the Marcas we want to count
     *   }
     * })
    **/
    count<T extends marcasCountArgs>(
      args?: Subset<T, marcasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcasAggregateArgs>(args: Subset<T, MarcasAggregateArgs>): Prisma.PrismaPromise<GetMarcasAggregateType<T>>

    /**
     * Group by Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasGroupByArgs} args - Group by arguments.
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
      T extends marcasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marcasGroupByArgs['orderBy'] }
        : { orderBy?: marcasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, marcasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the marcas model
   */
  readonly fields: marcasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for marcas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marcasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hardware<T extends marcas$hardwareArgs<ExtArgs> = {}>(args?: Subset<T, marcas$hardwareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hardwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the marcas model
   */
  interface marcasFieldRefs {
    readonly id_mar: FieldRef<"marcas", 'Int'>
    readonly nom_mar: FieldRef<"marcas", 'String'>
    readonly des_mar: FieldRef<"marcas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * marcas findUnique
   */
  export type marcasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas findUniqueOrThrow
   */
  export type marcasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas findFirst
   */
  export type marcasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marcas.
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marcas.
     */
    distinct?: MarcasScalarFieldEnum | MarcasScalarFieldEnum[]
  }

  /**
   * marcas findFirstOrThrow
   */
  export type marcasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marcas.
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marcas.
     */
    distinct?: MarcasScalarFieldEnum | MarcasScalarFieldEnum[]
  }

  /**
   * marcas findMany
   */
  export type marcasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing marcas.
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    distinct?: MarcasScalarFieldEnum | MarcasScalarFieldEnum[]
  }

  /**
   * marcas create
   */
  export type marcasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * The data needed to create a marcas.
     */
    data: XOR<marcasCreateInput, marcasUncheckedCreateInput>
  }

  /**
   * marcas createMany
   */
  export type marcasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marcas.
     */
    data: marcasCreateManyInput | marcasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * marcas createManyAndReturn
   */
  export type marcasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * The data used to create many marcas.
     */
    data: marcasCreateManyInput | marcasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * marcas update
   */
  export type marcasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * The data needed to update a marcas.
     */
    data: XOR<marcasUpdateInput, marcasUncheckedUpdateInput>
    /**
     * Choose, which marcas to update.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas updateMany
   */
  export type marcasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marcas.
     */
    data: XOR<marcasUpdateManyMutationInput, marcasUncheckedUpdateManyInput>
    /**
     * Filter which marcas to update
     */
    where?: marcasWhereInput
    /**
     * Limit how many marcas to update.
     */
    limit?: number
  }

  /**
   * marcas updateManyAndReturn
   */
  export type marcasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * The data used to update marcas.
     */
    data: XOR<marcasUpdateManyMutationInput, marcasUncheckedUpdateManyInput>
    /**
     * Filter which marcas to update
     */
    where?: marcasWhereInput
    /**
     * Limit how many marcas to update.
     */
    limit?: number
  }

  /**
   * marcas upsert
   */
  export type marcasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * The filter to search for the marcas to update in case it exists.
     */
    where: marcasWhereUniqueInput
    /**
     * In case the marcas found by the `where` argument doesn't exist, create a new marcas with this data.
     */
    create: XOR<marcasCreateInput, marcasUncheckedCreateInput>
    /**
     * In case the marcas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marcasUpdateInput, marcasUncheckedUpdateInput>
  }

  /**
   * marcas delete
   */
  export type marcasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter which marcas to delete.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas deleteMany
   */
  export type marcasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marcas to delete
     */
    where?: marcasWhereInput
    /**
     * Limit how many marcas to delete.
     */
    limit?: number
  }

  /**
   * marcas.hardware
   */
  export type marcas$hardwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hardware
     */
    select?: hardwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hardware
     */
    omit?: hardwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hardwareInclude<ExtArgs> | null
    where?: hardwareWhereInput
    orderBy?: hardwareOrderByWithRelationInput | hardwareOrderByWithRelationInput[]
    cursor?: hardwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HardwareScalarFieldEnum | HardwareScalarFieldEnum[]
  }

  /**
   * marcas without action
   */
  export type marcasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
  }


  /**
   * Model noticias
   */

  export type AggregateNoticias = {
    _count: NoticiasCountAggregateOutputType | null
    _avg: NoticiasAvgAggregateOutputType | null
    _sum: NoticiasSumAggregateOutputType | null
    _min: NoticiasMinAggregateOutputType | null
    _max: NoticiasMaxAggregateOutputType | null
  }

  export type NoticiasAvgAggregateOutputType = {
    id_not: number | null
  }

  export type NoticiasSumAggregateOutputType = {
    id_not: number | null
  }

  export type NoticiasMinAggregateOutputType = {
    id_not: number | null
    tit_not: string | null
    fec_not: Date | null
    res_not: string | null
    img_not: string | null
    url_not: string | null
  }

  export type NoticiasMaxAggregateOutputType = {
    id_not: number | null
    tit_not: string | null
    fec_not: Date | null
    res_not: string | null
    img_not: string | null
    url_not: string | null
  }

  export type NoticiasCountAggregateOutputType = {
    id_not: number
    tit_not: number
    fec_not: number
    res_not: number
    img_not: number
    url_not: number
    _all: number
  }


  export type NoticiasAvgAggregateInputType = {
    id_not?: true
  }

  export type NoticiasSumAggregateInputType = {
    id_not?: true
  }

  export type NoticiasMinAggregateInputType = {
    id_not?: true
    tit_not?: true
    fec_not?: true
    res_not?: true
    img_not?: true
    url_not?: true
  }

  export type NoticiasMaxAggregateInputType = {
    id_not?: true
    tit_not?: true
    fec_not?: true
    res_not?: true
    img_not?: true
    url_not?: true
  }

  export type NoticiasCountAggregateInputType = {
    id_not?: true
    tit_not?: true
    fec_not?: true
    res_not?: true
    img_not?: true
    url_not?: true
    _all?: true
  }

  export type NoticiasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which noticias to aggregate.
     */
    where?: noticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noticias to fetch.
     */
    orderBy?: noticiasOrderByWithRelationInput | noticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: noticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned noticias
    **/
    _count?: true | NoticiasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiasMaxAggregateInputType
  }

  export type GetNoticiasAggregateType<T extends NoticiasAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticias[P]>
      : GetScalarType<T[P], AggregateNoticias[P]>
  }




  export type noticiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noticiasWhereInput
    orderBy?: noticiasOrderByWithAggregationInput | noticiasOrderByWithAggregationInput[]
    by: NoticiasScalarFieldEnum[] | NoticiasScalarFieldEnum
    having?: noticiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiasCountAggregateInputType | true
    _avg?: NoticiasAvgAggregateInputType
    _sum?: NoticiasSumAggregateInputType
    _min?: NoticiasMinAggregateInputType
    _max?: NoticiasMaxAggregateInputType
  }

  export type NoticiasGroupByOutputType = {
    id_not: number
    tit_not: string
    fec_not: Date
    res_not: string | null
    img_not: string | null
    url_not: string | null
    _count: NoticiasCountAggregateOutputType | null
    _avg: NoticiasAvgAggregateOutputType | null
    _sum: NoticiasSumAggregateOutputType | null
    _min: NoticiasMinAggregateOutputType | null
    _max: NoticiasMaxAggregateOutputType | null
  }

  type GetNoticiasGroupByPayload<T extends noticiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiasGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiasGroupByOutputType[P]>
        }
      >
    >


  export type noticiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_not?: boolean
    tit_not?: boolean
    fec_not?: boolean
    res_not?: boolean
    img_not?: boolean
    url_not?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type noticiasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_not?: boolean
    tit_not?: boolean
    fec_not?: boolean
    res_not?: boolean
    img_not?: boolean
    url_not?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type noticiasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_not?: boolean
    tit_not?: boolean
    fec_not?: boolean
    res_not?: boolean
    img_not?: boolean
    url_not?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type noticiasSelectScalar = {
    id_not?: boolean
    tit_not?: boolean
    fec_not?: boolean
    res_not?: boolean
    img_not?: boolean
    url_not?: boolean
  }

  export type noticiasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_not" | "tit_not" | "fec_not" | "res_not" | "img_not" | "url_not", ExtArgs["result"]["noticias"]>

  export type $noticiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "noticias"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_not: number
      tit_not: string
      fec_not: Date
      res_not: string | null
      img_not: string | null
      url_not: string | null
    }, ExtArgs["result"]["noticias"]>
    composites: {}
  }

  type noticiasGetPayload<S extends boolean | null | undefined | noticiasDefaultArgs> = $Result.GetResult<Prisma.$noticiasPayload, S>

  type noticiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<noticiasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticiasCountAggregateInputType | true
    }

  export interface noticiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['noticias'], meta: { name: 'noticias' } }
    /**
     * Find zero or one Noticias that matches the filter.
     * @param {noticiasFindUniqueArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends noticiasFindUniqueArgs>(args: SelectSubset<T, noticiasFindUniqueArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noticias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {noticiasFindUniqueOrThrowArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends noticiasFindUniqueOrThrowArgs>(args: SelectSubset<T, noticiasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticiasFindFirstArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends noticiasFindFirstArgs>(args?: SelectSubset<T, noticiasFindFirstArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticiasFindFirstOrThrowArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends noticiasFindFirstOrThrowArgs>(args?: SelectSubset<T, noticiasFindFirstOrThrowArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticiasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticias.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticias.findMany({ take: 10 })
     * 
     * // Only select the `id_not`
     * const noticiasWithId_notOnly = await prisma.noticias.findMany({ select: { id_not: true } })
     * 
     */
    findMany<T extends noticiasFindManyArgs>(args?: SelectSubset<T, noticiasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noticias.
     * @param {noticiasCreateArgs} args - Arguments to create a Noticias.
     * @example
     * // Create one Noticias
     * const Noticias = await prisma.noticias.create({
     *   data: {
     *     // ... data to create a Noticias
     *   }
     * })
     * 
     */
    create<T extends noticiasCreateArgs>(args: SelectSubset<T, noticiasCreateArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noticias.
     * @param {noticiasCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticias = await prisma.noticias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends noticiasCreateManyArgs>(args?: SelectSubset<T, noticiasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {noticiasCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticias = await prisma.noticias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id_not`
     * const noticiasWithId_notOnly = await prisma.noticias.createManyAndReturn({
     *   select: { id_not: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends noticiasCreateManyAndReturnArgs>(args?: SelectSubset<T, noticiasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noticias.
     * @param {noticiasDeleteArgs} args - Arguments to delete one Noticias.
     * @example
     * // Delete one Noticias
     * const Noticias = await prisma.noticias.delete({
     *   where: {
     *     // ... filter to delete one Noticias
     *   }
     * })
     * 
     */
    delete<T extends noticiasDeleteArgs>(args: SelectSubset<T, noticiasDeleteArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noticias.
     * @param {noticiasUpdateArgs} args - Arguments to update one Noticias.
     * @example
     * // Update one Noticias
     * const noticias = await prisma.noticias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends noticiasUpdateArgs>(args: SelectSubset<T, noticiasUpdateArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noticias.
     * @param {noticiasDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends noticiasDeleteManyArgs>(args?: SelectSubset<T, noticiasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticias = await prisma.noticias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends noticiasUpdateManyArgs>(args: SelectSubset<T, noticiasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias and returns the data updated in the database.
     * @param {noticiasUpdateManyAndReturnArgs} args - Arguments to update many Noticias.
     * @example
     * // Update many Noticias
     * const noticias = await prisma.noticias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noticias and only return the `id_not`
     * const noticiasWithId_notOnly = await prisma.noticias.updateManyAndReturn({
     *   select: { id_not: true },
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
    updateManyAndReturn<T extends noticiasUpdateManyAndReturnArgs>(args: SelectSubset<T, noticiasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noticias.
     * @param {noticiasUpsertArgs} args - Arguments to update or create a Noticias.
     * @example
     * // Update or create a Noticias
     * const noticias = await prisma.noticias.upsert({
     *   create: {
     *     // ... data to create a Noticias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticias we want to update
     *   }
     * })
     */
    upsert<T extends noticiasUpsertArgs>(args: SelectSubset<T, noticiasUpsertArgs<ExtArgs>>): Prisma__noticiasClient<$Result.GetResult<Prisma.$noticiasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticiasCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticias.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends noticiasCountArgs>(
      args?: Subset<T, noticiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiasAggregateArgs>(args: Subset<T, NoticiasAggregateArgs>): Prisma.PrismaPromise<GetNoticiasAggregateType<T>>

    /**
     * Group by Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noticiasGroupByArgs} args - Group by arguments.
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
      T extends noticiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: noticiasGroupByArgs['orderBy'] }
        : { orderBy?: noticiasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, noticiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the noticias model
   */
  readonly fields: noticiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for noticias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__noticiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the noticias model
   */
  interface noticiasFieldRefs {
    readonly id_not: FieldRef<"noticias", 'Int'>
    readonly tit_not: FieldRef<"noticias", 'String'>
    readonly fec_not: FieldRef<"noticias", 'DateTime'>
    readonly res_not: FieldRef<"noticias", 'String'>
    readonly img_not: FieldRef<"noticias", 'String'>
    readonly url_not: FieldRef<"noticias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * noticias findUnique
   */
  export type noticiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * Filter, which noticias to fetch.
     */
    where: noticiasWhereUniqueInput
  }

  /**
   * noticias findUniqueOrThrow
   */
  export type noticiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * Filter, which noticias to fetch.
     */
    where: noticiasWhereUniqueInput
  }

  /**
   * noticias findFirst
   */
  export type noticiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * Filter, which noticias to fetch.
     */
    where?: noticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noticias to fetch.
     */
    orderBy?: noticiasOrderByWithRelationInput | noticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for noticias.
     */
    cursor?: noticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of noticias.
     */
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * noticias findFirstOrThrow
   */
  export type noticiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * Filter, which noticias to fetch.
     */
    where?: noticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noticias to fetch.
     */
    orderBy?: noticiasOrderByWithRelationInput | noticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for noticias.
     */
    cursor?: noticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of noticias.
     */
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * noticias findMany
   */
  export type noticiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * Filter, which noticias to fetch.
     */
    where?: noticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noticias to fetch.
     */
    orderBy?: noticiasOrderByWithRelationInput | noticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing noticias.
     */
    cursor?: noticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noticias.
     */
    skip?: number
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * noticias create
   */
  export type noticiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * The data needed to create a noticias.
     */
    data: XOR<noticiasCreateInput, noticiasUncheckedCreateInput>
  }

  /**
   * noticias createMany
   */
  export type noticiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many noticias.
     */
    data: noticiasCreateManyInput | noticiasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * noticias createManyAndReturn
   */
  export type noticiasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * The data used to create many noticias.
     */
    data: noticiasCreateManyInput | noticiasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * noticias update
   */
  export type noticiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * The data needed to update a noticias.
     */
    data: XOR<noticiasUpdateInput, noticiasUncheckedUpdateInput>
    /**
     * Choose, which noticias to update.
     */
    where: noticiasWhereUniqueInput
  }

  /**
   * noticias updateMany
   */
  export type noticiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update noticias.
     */
    data: XOR<noticiasUpdateManyMutationInput, noticiasUncheckedUpdateManyInput>
    /**
     * Filter which noticias to update
     */
    where?: noticiasWhereInput
    /**
     * Limit how many noticias to update.
     */
    limit?: number
  }

  /**
   * noticias updateManyAndReturn
   */
  export type noticiasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * The data used to update noticias.
     */
    data: XOR<noticiasUpdateManyMutationInput, noticiasUncheckedUpdateManyInput>
    /**
     * Filter which noticias to update
     */
    where?: noticiasWhereInput
    /**
     * Limit how many noticias to update.
     */
    limit?: number
  }

  /**
   * noticias upsert
   */
  export type noticiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * The filter to search for the noticias to update in case it exists.
     */
    where: noticiasWhereUniqueInput
    /**
     * In case the noticias found by the `where` argument doesn't exist, create a new noticias with this data.
     */
    create: XOR<noticiasCreateInput, noticiasUncheckedCreateInput>
    /**
     * In case the noticias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<noticiasUpdateInput, noticiasUncheckedUpdateInput>
  }

  /**
   * noticias delete
   */
  export type noticiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
    /**
     * Filter which noticias to delete.
     */
    where: noticiasWhereUniqueInput
  }

  /**
   * noticias deleteMany
   */
  export type noticiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which noticias to delete
     */
    where?: noticiasWhereInput
    /**
     * Limit how many noticias to delete.
     */
    limit?: number
  }

  /**
   * noticias without action
   */
  export type noticiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noticias
     */
    select?: noticiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noticias
     */
    omit?: noticiasOmit<ExtArgs> | null
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


  export const CategoriasScalarFieldEnum: {
    id_cat: 'id_cat',
    nom_cat: 'nom_cat'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const FranquiciasScalarFieldEnum: {
    id_fra: 'id_fra',
    nom_fra: 'nom_fra',
    des_fra: 'des_fra'
  };

  export type FranquiciasScalarFieldEnum = (typeof FranquiciasScalarFieldEnum)[keyof typeof FranquiciasScalarFieldEnum]


  export const HardwareScalarFieldEnum: {
    id_har: 'id_har',
    cod_har: 'cod_har',
    nom_har: 'nom_har',
    tipo_har: 'tipo_har',
    des_har: 'des_har',
    img_har: 'img_har',
    url_har: 'url_har',
    specs_har: 'specs_har',
    id_mar: 'id_mar'
  };

  export type HardwareScalarFieldEnum = (typeof HardwareScalarFieldEnum)[keyof typeof HardwareScalarFieldEnum]


  export const JuegosScalarFieldEnum: {
    id_jue: 'id_jue',
    nom_jue: 'nom_jue',
    des_jue: 'des_jue',
    pre_ori_jue: 'pre_ori_jue',
    pre_ofe_jue: 'pre_ofe_jue',
    porc_desc_jue: 'porc_desc_jue',
    img_jue: 'img_jue',
    id_fra: 'id_fra',
    id_cat: 'id_cat'
  };

  export type JuegosScalarFieldEnum = (typeof JuegosScalarFieldEnum)[keyof typeof JuegosScalarFieldEnum]


  export const MarcasScalarFieldEnum: {
    id_mar: 'id_mar',
    nom_mar: 'nom_mar',
    des_mar: 'des_mar'
  };

  export type MarcasScalarFieldEnum = (typeof MarcasScalarFieldEnum)[keyof typeof MarcasScalarFieldEnum]


  export const NoticiasScalarFieldEnum: {
    id_not: 'id_not',
    tit_not: 'tit_not',
    fec_not: 'fec_not',
    res_not: 'res_not',
    img_not: 'img_not',
    url_not: 'url_not'
  };

  export type NoticiasScalarFieldEnum = (typeof NoticiasScalarFieldEnum)[keyof typeof NoticiasScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id_cat?: IntFilter<"categorias"> | number
    nom_cat?: StringFilter<"categorias"> | string
    juegos?: JuegosListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id_cat?: SortOrder
    nom_cat?: SortOrder
    juegos?: juegosOrderByRelationAggregateInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id_cat?: number
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    nom_cat?: StringFilter<"categorias"> | string
    juegos?: JuegosListRelationFilter
  }, "id_cat">

  export type categoriasOrderByWithAggregationInput = {
    id_cat?: SortOrder
    nom_cat?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id_cat?: IntWithAggregatesFilter<"categorias"> | number
    nom_cat?: StringWithAggregatesFilter<"categorias"> | string
  }

  export type franquiciasWhereInput = {
    AND?: franquiciasWhereInput | franquiciasWhereInput[]
    OR?: franquiciasWhereInput[]
    NOT?: franquiciasWhereInput | franquiciasWhereInput[]
    id_fra?: IntFilter<"franquicias"> | number
    nom_fra?: StringFilter<"franquicias"> | string
    des_fra?: StringNullableFilter<"franquicias"> | string | null
    juegos?: JuegosListRelationFilter
  }

  export type franquiciasOrderByWithRelationInput = {
    id_fra?: SortOrder
    nom_fra?: SortOrder
    des_fra?: SortOrderInput | SortOrder
    juegos?: juegosOrderByRelationAggregateInput
  }

  export type franquiciasWhereUniqueInput = Prisma.AtLeast<{
    id_fra?: number
    AND?: franquiciasWhereInput | franquiciasWhereInput[]
    OR?: franquiciasWhereInput[]
    NOT?: franquiciasWhereInput | franquiciasWhereInput[]
    nom_fra?: StringFilter<"franquicias"> | string
    des_fra?: StringNullableFilter<"franquicias"> | string | null
    juegos?: JuegosListRelationFilter
  }, "id_fra">

  export type franquiciasOrderByWithAggregationInput = {
    id_fra?: SortOrder
    nom_fra?: SortOrder
    des_fra?: SortOrderInput | SortOrder
    _count?: franquiciasCountOrderByAggregateInput
    _avg?: franquiciasAvgOrderByAggregateInput
    _max?: franquiciasMaxOrderByAggregateInput
    _min?: franquiciasMinOrderByAggregateInput
    _sum?: franquiciasSumOrderByAggregateInput
  }

  export type franquiciasScalarWhereWithAggregatesInput = {
    AND?: franquiciasScalarWhereWithAggregatesInput | franquiciasScalarWhereWithAggregatesInput[]
    OR?: franquiciasScalarWhereWithAggregatesInput[]
    NOT?: franquiciasScalarWhereWithAggregatesInput | franquiciasScalarWhereWithAggregatesInput[]
    id_fra?: IntWithAggregatesFilter<"franquicias"> | number
    nom_fra?: StringWithAggregatesFilter<"franquicias"> | string
    des_fra?: StringNullableWithAggregatesFilter<"franquicias"> | string | null
  }

  export type hardwareWhereInput = {
    AND?: hardwareWhereInput | hardwareWhereInput[]
    OR?: hardwareWhereInput[]
    NOT?: hardwareWhereInput | hardwareWhereInput[]
    id_har?: IntFilter<"hardware"> | number
    cod_har?: StringFilter<"hardware"> | string
    nom_har?: StringFilter<"hardware"> | string
    tipo_har?: StringNullableFilter<"hardware"> | string | null
    des_har?: StringNullableFilter<"hardware"> | string | null
    img_har?: StringNullableFilter<"hardware"> | string | null
    url_har?: StringNullableFilter<"hardware"> | string | null
    specs_har?: StringNullableFilter<"hardware"> | string | null
    id_mar?: IntNullableFilter<"hardware"> | number | null
    marcas?: XOR<MarcasNullableScalarRelationFilter, marcasWhereInput> | null
  }

  export type hardwareOrderByWithRelationInput = {
    id_har?: SortOrder
    cod_har?: SortOrder
    nom_har?: SortOrder
    tipo_har?: SortOrderInput | SortOrder
    des_har?: SortOrderInput | SortOrder
    img_har?: SortOrderInput | SortOrder
    url_har?: SortOrderInput | SortOrder
    specs_har?: SortOrderInput | SortOrder
    id_mar?: SortOrderInput | SortOrder
    marcas?: marcasOrderByWithRelationInput
  }

  export type hardwareWhereUniqueInput = Prisma.AtLeast<{
    id_har?: number
    cod_har?: string
    AND?: hardwareWhereInput | hardwareWhereInput[]
    OR?: hardwareWhereInput[]
    NOT?: hardwareWhereInput | hardwareWhereInput[]
    nom_har?: StringFilter<"hardware"> | string
    tipo_har?: StringNullableFilter<"hardware"> | string | null
    des_har?: StringNullableFilter<"hardware"> | string | null
    img_har?: StringNullableFilter<"hardware"> | string | null
    url_har?: StringNullableFilter<"hardware"> | string | null
    specs_har?: StringNullableFilter<"hardware"> | string | null
    id_mar?: IntNullableFilter<"hardware"> | number | null
    marcas?: XOR<MarcasNullableScalarRelationFilter, marcasWhereInput> | null
  }, "id_har" | "cod_har">

  export type hardwareOrderByWithAggregationInput = {
    id_har?: SortOrder
    cod_har?: SortOrder
    nom_har?: SortOrder
    tipo_har?: SortOrderInput | SortOrder
    des_har?: SortOrderInput | SortOrder
    img_har?: SortOrderInput | SortOrder
    url_har?: SortOrderInput | SortOrder
    specs_har?: SortOrderInput | SortOrder
    id_mar?: SortOrderInput | SortOrder
    _count?: hardwareCountOrderByAggregateInput
    _avg?: hardwareAvgOrderByAggregateInput
    _max?: hardwareMaxOrderByAggregateInput
    _min?: hardwareMinOrderByAggregateInput
    _sum?: hardwareSumOrderByAggregateInput
  }

  export type hardwareScalarWhereWithAggregatesInput = {
    AND?: hardwareScalarWhereWithAggregatesInput | hardwareScalarWhereWithAggregatesInput[]
    OR?: hardwareScalarWhereWithAggregatesInput[]
    NOT?: hardwareScalarWhereWithAggregatesInput | hardwareScalarWhereWithAggregatesInput[]
    id_har?: IntWithAggregatesFilter<"hardware"> | number
    cod_har?: StringWithAggregatesFilter<"hardware"> | string
    nom_har?: StringWithAggregatesFilter<"hardware"> | string
    tipo_har?: StringNullableWithAggregatesFilter<"hardware"> | string | null
    des_har?: StringNullableWithAggregatesFilter<"hardware"> | string | null
    img_har?: StringNullableWithAggregatesFilter<"hardware"> | string | null
    url_har?: StringNullableWithAggregatesFilter<"hardware"> | string | null
    specs_har?: StringNullableWithAggregatesFilter<"hardware"> | string | null
    id_mar?: IntNullableWithAggregatesFilter<"hardware"> | number | null
  }

  export type juegosWhereInput = {
    AND?: juegosWhereInput | juegosWhereInput[]
    OR?: juegosWhereInput[]
    NOT?: juegosWhereInput | juegosWhereInput[]
    id_jue?: IntFilter<"juegos"> | number
    nom_jue?: StringFilter<"juegos"> | string
    des_jue?: StringFilter<"juegos"> | string
    pre_ori_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    img_jue?: StringNullableFilter<"juegos"> | string | null
    id_fra?: IntNullableFilter<"juegos"> | number | null
    id_cat?: IntNullableFilter<"juegos"> | number | null
    categorias?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    franquicias?: XOR<FranquiciasNullableScalarRelationFilter, franquiciasWhereInput> | null
  }

  export type juegosOrderByWithRelationInput = {
    id_jue?: SortOrder
    nom_jue?: SortOrder
    des_jue?: SortOrder
    pre_ori_jue?: SortOrderInput | SortOrder
    pre_ofe_jue?: SortOrderInput | SortOrder
    porc_desc_jue?: SortOrderInput | SortOrder
    img_jue?: SortOrderInput | SortOrder
    id_fra?: SortOrderInput | SortOrder
    id_cat?: SortOrderInput | SortOrder
    categorias?: categoriasOrderByWithRelationInput
    franquicias?: franquiciasOrderByWithRelationInput
  }

  export type juegosWhereUniqueInput = Prisma.AtLeast<{
    id_jue?: number
    AND?: juegosWhereInput | juegosWhereInput[]
    OR?: juegosWhereInput[]
    NOT?: juegosWhereInput | juegosWhereInput[]
    nom_jue?: StringFilter<"juegos"> | string
    des_jue?: StringFilter<"juegos"> | string
    pre_ori_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    img_jue?: StringNullableFilter<"juegos"> | string | null
    id_fra?: IntNullableFilter<"juegos"> | number | null
    id_cat?: IntNullableFilter<"juegos"> | number | null
    categorias?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    franquicias?: XOR<FranquiciasNullableScalarRelationFilter, franquiciasWhereInput> | null
  }, "id_jue">

  export type juegosOrderByWithAggregationInput = {
    id_jue?: SortOrder
    nom_jue?: SortOrder
    des_jue?: SortOrder
    pre_ori_jue?: SortOrderInput | SortOrder
    pre_ofe_jue?: SortOrderInput | SortOrder
    porc_desc_jue?: SortOrderInput | SortOrder
    img_jue?: SortOrderInput | SortOrder
    id_fra?: SortOrderInput | SortOrder
    id_cat?: SortOrderInput | SortOrder
    _count?: juegosCountOrderByAggregateInput
    _avg?: juegosAvgOrderByAggregateInput
    _max?: juegosMaxOrderByAggregateInput
    _min?: juegosMinOrderByAggregateInput
    _sum?: juegosSumOrderByAggregateInput
  }

  export type juegosScalarWhereWithAggregatesInput = {
    AND?: juegosScalarWhereWithAggregatesInput | juegosScalarWhereWithAggregatesInput[]
    OR?: juegosScalarWhereWithAggregatesInput[]
    NOT?: juegosScalarWhereWithAggregatesInput | juegosScalarWhereWithAggregatesInput[]
    id_jue?: IntWithAggregatesFilter<"juegos"> | number
    nom_jue?: StringWithAggregatesFilter<"juegos"> | string
    des_jue?: StringWithAggregatesFilter<"juegos"> | string
    pre_ori_jue?: DecimalNullableWithAggregatesFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: DecimalNullableWithAggregatesFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: DecimalNullableWithAggregatesFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    img_jue?: StringNullableWithAggregatesFilter<"juegos"> | string | null
    id_fra?: IntNullableWithAggregatesFilter<"juegos"> | number | null
    id_cat?: IntNullableWithAggregatesFilter<"juegos"> | number | null
  }

  export type marcasWhereInput = {
    AND?: marcasWhereInput | marcasWhereInput[]
    OR?: marcasWhereInput[]
    NOT?: marcasWhereInput | marcasWhereInput[]
    id_mar?: IntFilter<"marcas"> | number
    nom_mar?: StringFilter<"marcas"> | string
    des_mar?: StringNullableFilter<"marcas"> | string | null
    hardware?: HardwareListRelationFilter
  }

  export type marcasOrderByWithRelationInput = {
    id_mar?: SortOrder
    nom_mar?: SortOrder
    des_mar?: SortOrderInput | SortOrder
    hardware?: hardwareOrderByRelationAggregateInput
  }

  export type marcasWhereUniqueInput = Prisma.AtLeast<{
    id_mar?: number
    AND?: marcasWhereInput | marcasWhereInput[]
    OR?: marcasWhereInput[]
    NOT?: marcasWhereInput | marcasWhereInput[]
    nom_mar?: StringFilter<"marcas"> | string
    des_mar?: StringNullableFilter<"marcas"> | string | null
    hardware?: HardwareListRelationFilter
  }, "id_mar">

  export type marcasOrderByWithAggregationInput = {
    id_mar?: SortOrder
    nom_mar?: SortOrder
    des_mar?: SortOrderInput | SortOrder
    _count?: marcasCountOrderByAggregateInput
    _avg?: marcasAvgOrderByAggregateInput
    _max?: marcasMaxOrderByAggregateInput
    _min?: marcasMinOrderByAggregateInput
    _sum?: marcasSumOrderByAggregateInput
  }

  export type marcasScalarWhereWithAggregatesInput = {
    AND?: marcasScalarWhereWithAggregatesInput | marcasScalarWhereWithAggregatesInput[]
    OR?: marcasScalarWhereWithAggregatesInput[]
    NOT?: marcasScalarWhereWithAggregatesInput | marcasScalarWhereWithAggregatesInput[]
    id_mar?: IntWithAggregatesFilter<"marcas"> | number
    nom_mar?: StringWithAggregatesFilter<"marcas"> | string
    des_mar?: StringNullableWithAggregatesFilter<"marcas"> | string | null
  }

  export type noticiasWhereInput = {
    AND?: noticiasWhereInput | noticiasWhereInput[]
    OR?: noticiasWhereInput[]
    NOT?: noticiasWhereInput | noticiasWhereInput[]
    id_not?: IntFilter<"noticias"> | number
    tit_not?: StringFilter<"noticias"> | string
    fec_not?: DateTimeFilter<"noticias"> | Date | string
    res_not?: StringNullableFilter<"noticias"> | string | null
    img_not?: StringNullableFilter<"noticias"> | string | null
    url_not?: StringNullableFilter<"noticias"> | string | null
  }

  export type noticiasOrderByWithRelationInput = {
    id_not?: SortOrder
    tit_not?: SortOrder
    fec_not?: SortOrder
    res_not?: SortOrderInput | SortOrder
    img_not?: SortOrderInput | SortOrder
    url_not?: SortOrderInput | SortOrder
  }

  export type noticiasWhereUniqueInput = Prisma.AtLeast<{
    id_not?: number
    AND?: noticiasWhereInput | noticiasWhereInput[]
    OR?: noticiasWhereInput[]
    NOT?: noticiasWhereInput | noticiasWhereInput[]
    tit_not?: StringFilter<"noticias"> | string
    fec_not?: DateTimeFilter<"noticias"> | Date | string
    res_not?: StringNullableFilter<"noticias"> | string | null
    img_not?: StringNullableFilter<"noticias"> | string | null
    url_not?: StringNullableFilter<"noticias"> | string | null
  }, "id_not">

  export type noticiasOrderByWithAggregationInput = {
    id_not?: SortOrder
    tit_not?: SortOrder
    fec_not?: SortOrder
    res_not?: SortOrderInput | SortOrder
    img_not?: SortOrderInput | SortOrder
    url_not?: SortOrderInput | SortOrder
    _count?: noticiasCountOrderByAggregateInput
    _avg?: noticiasAvgOrderByAggregateInput
    _max?: noticiasMaxOrderByAggregateInput
    _min?: noticiasMinOrderByAggregateInput
    _sum?: noticiasSumOrderByAggregateInput
  }

  export type noticiasScalarWhereWithAggregatesInput = {
    AND?: noticiasScalarWhereWithAggregatesInput | noticiasScalarWhereWithAggregatesInput[]
    OR?: noticiasScalarWhereWithAggregatesInput[]
    NOT?: noticiasScalarWhereWithAggregatesInput | noticiasScalarWhereWithAggregatesInput[]
    id_not?: IntWithAggregatesFilter<"noticias"> | number
    tit_not?: StringWithAggregatesFilter<"noticias"> | string
    fec_not?: DateTimeWithAggregatesFilter<"noticias"> | Date | string
    res_not?: StringNullableWithAggregatesFilter<"noticias"> | string | null
    img_not?: StringNullableWithAggregatesFilter<"noticias"> | string | null
    url_not?: StringNullableWithAggregatesFilter<"noticias"> | string | null
  }

  export type categoriasCreateInput = {
    nom_cat: string
    juegos?: juegosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id_cat?: number
    nom_cat: string
    juegos?: juegosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    nom_cat?: StringFieldUpdateOperationsInput | string
    juegos?: juegosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id_cat?: IntFieldUpdateOperationsInput | number
    nom_cat?: StringFieldUpdateOperationsInput | string
    juegos?: juegosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id_cat?: number
    nom_cat: string
  }

  export type categoriasUpdateManyMutationInput = {
    nom_cat?: StringFieldUpdateOperationsInput | string
  }

  export type categoriasUncheckedUpdateManyInput = {
    id_cat?: IntFieldUpdateOperationsInput | number
    nom_cat?: StringFieldUpdateOperationsInput | string
  }

  export type franquiciasCreateInput = {
    nom_fra: string
    des_fra?: string | null
    juegos?: juegosCreateNestedManyWithoutFranquiciasInput
  }

  export type franquiciasUncheckedCreateInput = {
    id_fra?: number
    nom_fra: string
    des_fra?: string | null
    juegos?: juegosUncheckedCreateNestedManyWithoutFranquiciasInput
  }

  export type franquiciasUpdateInput = {
    nom_fra?: StringFieldUpdateOperationsInput | string
    des_fra?: NullableStringFieldUpdateOperationsInput | string | null
    juegos?: juegosUpdateManyWithoutFranquiciasNestedInput
  }

  export type franquiciasUncheckedUpdateInput = {
    id_fra?: IntFieldUpdateOperationsInput | number
    nom_fra?: StringFieldUpdateOperationsInput | string
    des_fra?: NullableStringFieldUpdateOperationsInput | string | null
    juegos?: juegosUncheckedUpdateManyWithoutFranquiciasNestedInput
  }

  export type franquiciasCreateManyInput = {
    id_fra?: number
    nom_fra: string
    des_fra?: string | null
  }

  export type franquiciasUpdateManyMutationInput = {
    nom_fra?: StringFieldUpdateOperationsInput | string
    des_fra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type franquiciasUncheckedUpdateManyInput = {
    id_fra?: IntFieldUpdateOperationsInput | number
    nom_fra?: StringFieldUpdateOperationsInput | string
    des_fra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hardwareCreateInput = {
    cod_har: string
    nom_har: string
    tipo_har?: string | null
    des_har?: string | null
    img_har?: string | null
    url_har?: string | null
    specs_har?: string | null
    marcas?: marcasCreateNestedOneWithoutHardwareInput
  }

  export type hardwareUncheckedCreateInput = {
    id_har?: number
    cod_har: string
    nom_har: string
    tipo_har?: string | null
    des_har?: string | null
    img_har?: string | null
    url_har?: string | null
    specs_har?: string | null
    id_mar?: number | null
  }

  export type hardwareUpdateInput = {
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
    marcas?: marcasUpdateOneWithoutHardwareNestedInput
  }

  export type hardwareUncheckedUpdateInput = {
    id_har?: IntFieldUpdateOperationsInput | number
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
    id_mar?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type hardwareCreateManyInput = {
    id_har?: number
    cod_har: string
    nom_har: string
    tipo_har?: string | null
    des_har?: string | null
    img_har?: string | null
    url_har?: string | null
    specs_har?: string | null
    id_mar?: number | null
  }

  export type hardwareUpdateManyMutationInput = {
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hardwareUncheckedUpdateManyInput = {
    id_har?: IntFieldUpdateOperationsInput | number
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
    id_mar?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type juegosCreateInput = {
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    categorias?: categoriasCreateNestedOneWithoutJuegosInput
    franquicias?: franquiciasCreateNestedOneWithoutJuegosInput
  }

  export type juegosUncheckedCreateInput = {
    id_jue?: number
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    id_fra?: number | null
    id_cat?: number | null
  }

  export type juegosUpdateInput = {
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    categorias?: categoriasUpdateOneWithoutJuegosNestedInput
    franquicias?: franquiciasUpdateOneWithoutJuegosNestedInput
  }

  export type juegosUncheckedUpdateInput = {
    id_jue?: IntFieldUpdateOperationsInput | number
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    id_fra?: NullableIntFieldUpdateOperationsInput | number | null
    id_cat?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type juegosCreateManyInput = {
    id_jue?: number
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    id_fra?: number | null
    id_cat?: number | null
  }

  export type juegosUpdateManyMutationInput = {
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type juegosUncheckedUpdateManyInput = {
    id_jue?: IntFieldUpdateOperationsInput | number
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    id_fra?: NullableIntFieldUpdateOperationsInput | number | null
    id_cat?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type marcasCreateInput = {
    nom_mar: string
    des_mar?: string | null
    hardware?: hardwareCreateNestedManyWithoutMarcasInput
  }

  export type marcasUncheckedCreateInput = {
    id_mar?: number
    nom_mar: string
    des_mar?: string | null
    hardware?: hardwareUncheckedCreateNestedManyWithoutMarcasInput
  }

  export type marcasUpdateInput = {
    nom_mar?: StringFieldUpdateOperationsInput | string
    des_mar?: NullableStringFieldUpdateOperationsInput | string | null
    hardware?: hardwareUpdateManyWithoutMarcasNestedInput
  }

  export type marcasUncheckedUpdateInput = {
    id_mar?: IntFieldUpdateOperationsInput | number
    nom_mar?: StringFieldUpdateOperationsInput | string
    des_mar?: NullableStringFieldUpdateOperationsInput | string | null
    hardware?: hardwareUncheckedUpdateManyWithoutMarcasNestedInput
  }

  export type marcasCreateManyInput = {
    id_mar?: number
    nom_mar: string
    des_mar?: string | null
  }

  export type marcasUpdateManyMutationInput = {
    nom_mar?: StringFieldUpdateOperationsInput | string
    des_mar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type marcasUncheckedUpdateManyInput = {
    id_mar?: IntFieldUpdateOperationsInput | number
    nom_mar?: StringFieldUpdateOperationsInput | string
    des_mar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type noticiasCreateInput = {
    tit_not: string
    fec_not?: Date | string
    res_not?: string | null
    img_not?: string | null
    url_not?: string | null
  }

  export type noticiasUncheckedCreateInput = {
    id_not?: number
    tit_not: string
    fec_not?: Date | string
    res_not?: string | null
    img_not?: string | null
    url_not?: string | null
  }

  export type noticiasUpdateInput = {
    tit_not?: StringFieldUpdateOperationsInput | string
    fec_not?: DateTimeFieldUpdateOperationsInput | Date | string
    res_not?: NullableStringFieldUpdateOperationsInput | string | null
    img_not?: NullableStringFieldUpdateOperationsInput | string | null
    url_not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type noticiasUncheckedUpdateInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    tit_not?: StringFieldUpdateOperationsInput | string
    fec_not?: DateTimeFieldUpdateOperationsInput | Date | string
    res_not?: NullableStringFieldUpdateOperationsInput | string | null
    img_not?: NullableStringFieldUpdateOperationsInput | string | null
    url_not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type noticiasCreateManyInput = {
    id_not?: number
    tit_not: string
    fec_not?: Date | string
    res_not?: string | null
    img_not?: string | null
    url_not?: string | null
  }

  export type noticiasUpdateManyMutationInput = {
    tit_not?: StringFieldUpdateOperationsInput | string
    fec_not?: DateTimeFieldUpdateOperationsInput | Date | string
    res_not?: NullableStringFieldUpdateOperationsInput | string | null
    img_not?: NullableStringFieldUpdateOperationsInput | string | null
    url_not?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type noticiasUncheckedUpdateManyInput = {
    id_not?: IntFieldUpdateOperationsInput | number
    tit_not?: StringFieldUpdateOperationsInput | string
    fec_not?: DateTimeFieldUpdateOperationsInput | Date | string
    res_not?: NullableStringFieldUpdateOperationsInput | string | null
    img_not?: NullableStringFieldUpdateOperationsInput | string | null
    url_not?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type JuegosListRelationFilter = {
    every?: juegosWhereInput
    some?: juegosWhereInput
    none?: juegosWhereInput
  }

  export type juegosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasCountOrderByAggregateInput = {
    id_cat?: SortOrder
    nom_cat?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id_cat?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id_cat?: SortOrder
    nom_cat?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id_cat?: SortOrder
    nom_cat?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id_cat?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type franquiciasCountOrderByAggregateInput = {
    id_fra?: SortOrder
    nom_fra?: SortOrder
    des_fra?: SortOrder
  }

  export type franquiciasAvgOrderByAggregateInput = {
    id_fra?: SortOrder
  }

  export type franquiciasMaxOrderByAggregateInput = {
    id_fra?: SortOrder
    nom_fra?: SortOrder
    des_fra?: SortOrder
  }

  export type franquiciasMinOrderByAggregateInput = {
    id_fra?: SortOrder
    nom_fra?: SortOrder
    des_fra?: SortOrder
  }

  export type franquiciasSumOrderByAggregateInput = {
    id_fra?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MarcasNullableScalarRelationFilter = {
    is?: marcasWhereInput | null
    isNot?: marcasWhereInput | null
  }

  export type hardwareCountOrderByAggregateInput = {
    id_har?: SortOrder
    cod_har?: SortOrder
    nom_har?: SortOrder
    tipo_har?: SortOrder
    des_har?: SortOrder
    img_har?: SortOrder
    url_har?: SortOrder
    specs_har?: SortOrder
    id_mar?: SortOrder
  }

  export type hardwareAvgOrderByAggregateInput = {
    id_har?: SortOrder
    id_mar?: SortOrder
  }

  export type hardwareMaxOrderByAggregateInput = {
    id_har?: SortOrder
    cod_har?: SortOrder
    nom_har?: SortOrder
    tipo_har?: SortOrder
    des_har?: SortOrder
    img_har?: SortOrder
    url_har?: SortOrder
    specs_har?: SortOrder
    id_mar?: SortOrder
  }

  export type hardwareMinOrderByAggregateInput = {
    id_har?: SortOrder
    cod_har?: SortOrder
    nom_har?: SortOrder
    tipo_har?: SortOrder
    des_har?: SortOrder
    img_har?: SortOrder
    url_har?: SortOrder
    specs_har?: SortOrder
    id_mar?: SortOrder
  }

  export type hardwareSumOrderByAggregateInput = {
    id_har?: SortOrder
    id_mar?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriasNullableScalarRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type FranquiciasNullableScalarRelationFilter = {
    is?: franquiciasWhereInput | null
    isNot?: franquiciasWhereInput | null
  }

  export type juegosCountOrderByAggregateInput = {
    id_jue?: SortOrder
    nom_jue?: SortOrder
    des_jue?: SortOrder
    pre_ori_jue?: SortOrder
    pre_ofe_jue?: SortOrder
    porc_desc_jue?: SortOrder
    img_jue?: SortOrder
    id_fra?: SortOrder
    id_cat?: SortOrder
  }

  export type juegosAvgOrderByAggregateInput = {
    id_jue?: SortOrder
    pre_ori_jue?: SortOrder
    pre_ofe_jue?: SortOrder
    porc_desc_jue?: SortOrder
    id_fra?: SortOrder
    id_cat?: SortOrder
  }

  export type juegosMaxOrderByAggregateInput = {
    id_jue?: SortOrder
    nom_jue?: SortOrder
    des_jue?: SortOrder
    pre_ori_jue?: SortOrder
    pre_ofe_jue?: SortOrder
    porc_desc_jue?: SortOrder
    img_jue?: SortOrder
    id_fra?: SortOrder
    id_cat?: SortOrder
  }

  export type juegosMinOrderByAggregateInput = {
    id_jue?: SortOrder
    nom_jue?: SortOrder
    des_jue?: SortOrder
    pre_ori_jue?: SortOrder
    pre_ofe_jue?: SortOrder
    porc_desc_jue?: SortOrder
    img_jue?: SortOrder
    id_fra?: SortOrder
    id_cat?: SortOrder
  }

  export type juegosSumOrderByAggregateInput = {
    id_jue?: SortOrder
    pre_ori_jue?: SortOrder
    pre_ofe_jue?: SortOrder
    porc_desc_jue?: SortOrder
    id_fra?: SortOrder
    id_cat?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type HardwareListRelationFilter = {
    every?: hardwareWhereInput
    some?: hardwareWhereInput
    none?: hardwareWhereInput
  }

  export type hardwareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type marcasCountOrderByAggregateInput = {
    id_mar?: SortOrder
    nom_mar?: SortOrder
    des_mar?: SortOrder
  }

  export type marcasAvgOrderByAggregateInput = {
    id_mar?: SortOrder
  }

  export type marcasMaxOrderByAggregateInput = {
    id_mar?: SortOrder
    nom_mar?: SortOrder
    des_mar?: SortOrder
  }

  export type marcasMinOrderByAggregateInput = {
    id_mar?: SortOrder
    nom_mar?: SortOrder
    des_mar?: SortOrder
  }

  export type marcasSumOrderByAggregateInput = {
    id_mar?: SortOrder
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

  export type noticiasCountOrderByAggregateInput = {
    id_not?: SortOrder
    tit_not?: SortOrder
    fec_not?: SortOrder
    res_not?: SortOrder
    img_not?: SortOrder
    url_not?: SortOrder
  }

  export type noticiasAvgOrderByAggregateInput = {
    id_not?: SortOrder
  }

  export type noticiasMaxOrderByAggregateInput = {
    id_not?: SortOrder
    tit_not?: SortOrder
    fec_not?: SortOrder
    res_not?: SortOrder
    img_not?: SortOrder
    url_not?: SortOrder
  }

  export type noticiasMinOrderByAggregateInput = {
    id_not?: SortOrder
    tit_not?: SortOrder
    fec_not?: SortOrder
    res_not?: SortOrder
    img_not?: SortOrder
    url_not?: SortOrder
  }

  export type noticiasSumOrderByAggregateInput = {
    id_not?: SortOrder
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

  export type juegosCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<juegosCreateWithoutCategoriasInput, juegosUncheckedCreateWithoutCategoriasInput> | juegosCreateWithoutCategoriasInput[] | juegosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutCategoriasInput | juegosCreateOrConnectWithoutCategoriasInput[]
    createMany?: juegosCreateManyCategoriasInputEnvelope
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
  }

  export type juegosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<juegosCreateWithoutCategoriasInput, juegosUncheckedCreateWithoutCategoriasInput> | juegosCreateWithoutCategoriasInput[] | juegosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutCategoriasInput | juegosCreateOrConnectWithoutCategoriasInput[]
    createMany?: juegosCreateManyCategoriasInputEnvelope
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type juegosUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<juegosCreateWithoutCategoriasInput, juegosUncheckedCreateWithoutCategoriasInput> | juegosCreateWithoutCategoriasInput[] | juegosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutCategoriasInput | juegosCreateOrConnectWithoutCategoriasInput[]
    upsert?: juegosUpsertWithWhereUniqueWithoutCategoriasInput | juegosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: juegosCreateManyCategoriasInputEnvelope
    set?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    disconnect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    delete?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    update?: juegosUpdateWithWhereUniqueWithoutCategoriasInput | juegosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: juegosUpdateManyWithWhereWithoutCategoriasInput | juegosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: juegosScalarWhereInput | juegosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type juegosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<juegosCreateWithoutCategoriasInput, juegosUncheckedCreateWithoutCategoriasInput> | juegosCreateWithoutCategoriasInput[] | juegosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutCategoriasInput | juegosCreateOrConnectWithoutCategoriasInput[]
    upsert?: juegosUpsertWithWhereUniqueWithoutCategoriasInput | juegosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: juegosCreateManyCategoriasInputEnvelope
    set?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    disconnect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    delete?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    update?: juegosUpdateWithWhereUniqueWithoutCategoriasInput | juegosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: juegosUpdateManyWithWhereWithoutCategoriasInput | juegosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: juegosScalarWhereInput | juegosScalarWhereInput[]
  }

  export type juegosCreateNestedManyWithoutFranquiciasInput = {
    create?: XOR<juegosCreateWithoutFranquiciasInput, juegosUncheckedCreateWithoutFranquiciasInput> | juegosCreateWithoutFranquiciasInput[] | juegosUncheckedCreateWithoutFranquiciasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutFranquiciasInput | juegosCreateOrConnectWithoutFranquiciasInput[]
    createMany?: juegosCreateManyFranquiciasInputEnvelope
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
  }

  export type juegosUncheckedCreateNestedManyWithoutFranquiciasInput = {
    create?: XOR<juegosCreateWithoutFranquiciasInput, juegosUncheckedCreateWithoutFranquiciasInput> | juegosCreateWithoutFranquiciasInput[] | juegosUncheckedCreateWithoutFranquiciasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutFranquiciasInput | juegosCreateOrConnectWithoutFranquiciasInput[]
    createMany?: juegosCreateManyFranquiciasInputEnvelope
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type juegosUpdateManyWithoutFranquiciasNestedInput = {
    create?: XOR<juegosCreateWithoutFranquiciasInput, juegosUncheckedCreateWithoutFranquiciasInput> | juegosCreateWithoutFranquiciasInput[] | juegosUncheckedCreateWithoutFranquiciasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutFranquiciasInput | juegosCreateOrConnectWithoutFranquiciasInput[]
    upsert?: juegosUpsertWithWhereUniqueWithoutFranquiciasInput | juegosUpsertWithWhereUniqueWithoutFranquiciasInput[]
    createMany?: juegosCreateManyFranquiciasInputEnvelope
    set?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    disconnect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    delete?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    update?: juegosUpdateWithWhereUniqueWithoutFranquiciasInput | juegosUpdateWithWhereUniqueWithoutFranquiciasInput[]
    updateMany?: juegosUpdateManyWithWhereWithoutFranquiciasInput | juegosUpdateManyWithWhereWithoutFranquiciasInput[]
    deleteMany?: juegosScalarWhereInput | juegosScalarWhereInput[]
  }

  export type juegosUncheckedUpdateManyWithoutFranquiciasNestedInput = {
    create?: XOR<juegosCreateWithoutFranquiciasInput, juegosUncheckedCreateWithoutFranquiciasInput> | juegosCreateWithoutFranquiciasInput[] | juegosUncheckedCreateWithoutFranquiciasInput[]
    connectOrCreate?: juegosCreateOrConnectWithoutFranquiciasInput | juegosCreateOrConnectWithoutFranquiciasInput[]
    upsert?: juegosUpsertWithWhereUniqueWithoutFranquiciasInput | juegosUpsertWithWhereUniqueWithoutFranquiciasInput[]
    createMany?: juegosCreateManyFranquiciasInputEnvelope
    set?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    disconnect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    delete?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    connect?: juegosWhereUniqueInput | juegosWhereUniqueInput[]
    update?: juegosUpdateWithWhereUniqueWithoutFranquiciasInput | juegosUpdateWithWhereUniqueWithoutFranquiciasInput[]
    updateMany?: juegosUpdateManyWithWhereWithoutFranquiciasInput | juegosUpdateManyWithWhereWithoutFranquiciasInput[]
    deleteMany?: juegosScalarWhereInput | juegosScalarWhereInput[]
  }

  export type marcasCreateNestedOneWithoutHardwareInput = {
    create?: XOR<marcasCreateWithoutHardwareInput, marcasUncheckedCreateWithoutHardwareInput>
    connectOrCreate?: marcasCreateOrConnectWithoutHardwareInput
    connect?: marcasWhereUniqueInput
  }

  export type marcasUpdateOneWithoutHardwareNestedInput = {
    create?: XOR<marcasCreateWithoutHardwareInput, marcasUncheckedCreateWithoutHardwareInput>
    connectOrCreate?: marcasCreateOrConnectWithoutHardwareInput
    upsert?: marcasUpsertWithoutHardwareInput
    disconnect?: marcasWhereInput | boolean
    delete?: marcasWhereInput | boolean
    connect?: marcasWhereUniqueInput
    update?: XOR<XOR<marcasUpdateToOneWithWhereWithoutHardwareInput, marcasUpdateWithoutHardwareInput>, marcasUncheckedUpdateWithoutHardwareInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriasCreateNestedOneWithoutJuegosInput = {
    create?: XOR<categoriasCreateWithoutJuegosInput, categoriasUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutJuegosInput
    connect?: categoriasWhereUniqueInput
  }

  export type franquiciasCreateNestedOneWithoutJuegosInput = {
    create?: XOR<franquiciasCreateWithoutJuegosInput, franquiciasUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: franquiciasCreateOrConnectWithoutJuegosInput
    connect?: franquiciasWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type categoriasUpdateOneWithoutJuegosNestedInput = {
    create?: XOR<categoriasCreateWithoutJuegosInput, categoriasUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutJuegosInput
    upsert?: categoriasUpsertWithoutJuegosInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutJuegosInput, categoriasUpdateWithoutJuegosInput>, categoriasUncheckedUpdateWithoutJuegosInput>
  }

  export type franquiciasUpdateOneWithoutJuegosNestedInput = {
    create?: XOR<franquiciasCreateWithoutJuegosInput, franquiciasUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: franquiciasCreateOrConnectWithoutJuegosInput
    upsert?: franquiciasUpsertWithoutJuegosInput
    disconnect?: franquiciasWhereInput | boolean
    delete?: franquiciasWhereInput | boolean
    connect?: franquiciasWhereUniqueInput
    update?: XOR<XOR<franquiciasUpdateToOneWithWhereWithoutJuegosInput, franquiciasUpdateWithoutJuegosInput>, franquiciasUncheckedUpdateWithoutJuegosInput>
  }

  export type hardwareCreateNestedManyWithoutMarcasInput = {
    create?: XOR<hardwareCreateWithoutMarcasInput, hardwareUncheckedCreateWithoutMarcasInput> | hardwareCreateWithoutMarcasInput[] | hardwareUncheckedCreateWithoutMarcasInput[]
    connectOrCreate?: hardwareCreateOrConnectWithoutMarcasInput | hardwareCreateOrConnectWithoutMarcasInput[]
    createMany?: hardwareCreateManyMarcasInputEnvelope
    connect?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
  }

  export type hardwareUncheckedCreateNestedManyWithoutMarcasInput = {
    create?: XOR<hardwareCreateWithoutMarcasInput, hardwareUncheckedCreateWithoutMarcasInput> | hardwareCreateWithoutMarcasInput[] | hardwareUncheckedCreateWithoutMarcasInput[]
    connectOrCreate?: hardwareCreateOrConnectWithoutMarcasInput | hardwareCreateOrConnectWithoutMarcasInput[]
    createMany?: hardwareCreateManyMarcasInputEnvelope
    connect?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
  }

  export type hardwareUpdateManyWithoutMarcasNestedInput = {
    create?: XOR<hardwareCreateWithoutMarcasInput, hardwareUncheckedCreateWithoutMarcasInput> | hardwareCreateWithoutMarcasInput[] | hardwareUncheckedCreateWithoutMarcasInput[]
    connectOrCreate?: hardwareCreateOrConnectWithoutMarcasInput | hardwareCreateOrConnectWithoutMarcasInput[]
    upsert?: hardwareUpsertWithWhereUniqueWithoutMarcasInput | hardwareUpsertWithWhereUniqueWithoutMarcasInput[]
    createMany?: hardwareCreateManyMarcasInputEnvelope
    set?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    disconnect?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    delete?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    connect?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    update?: hardwareUpdateWithWhereUniqueWithoutMarcasInput | hardwareUpdateWithWhereUniqueWithoutMarcasInput[]
    updateMany?: hardwareUpdateManyWithWhereWithoutMarcasInput | hardwareUpdateManyWithWhereWithoutMarcasInput[]
    deleteMany?: hardwareScalarWhereInput | hardwareScalarWhereInput[]
  }

  export type hardwareUncheckedUpdateManyWithoutMarcasNestedInput = {
    create?: XOR<hardwareCreateWithoutMarcasInput, hardwareUncheckedCreateWithoutMarcasInput> | hardwareCreateWithoutMarcasInput[] | hardwareUncheckedCreateWithoutMarcasInput[]
    connectOrCreate?: hardwareCreateOrConnectWithoutMarcasInput | hardwareCreateOrConnectWithoutMarcasInput[]
    upsert?: hardwareUpsertWithWhereUniqueWithoutMarcasInput | hardwareUpsertWithWhereUniqueWithoutMarcasInput[]
    createMany?: hardwareCreateManyMarcasInputEnvelope
    set?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    disconnect?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    delete?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    connect?: hardwareWhereUniqueInput | hardwareWhereUniqueInput[]
    update?: hardwareUpdateWithWhereUniqueWithoutMarcasInput | hardwareUpdateWithWhereUniqueWithoutMarcasInput[]
    updateMany?: hardwareUpdateManyWithWhereWithoutMarcasInput | hardwareUpdateManyWithWhereWithoutMarcasInput[]
    deleteMany?: hardwareScalarWhereInput | hardwareScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type juegosCreateWithoutCategoriasInput = {
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    franquicias?: franquiciasCreateNestedOneWithoutJuegosInput
  }

  export type juegosUncheckedCreateWithoutCategoriasInput = {
    id_jue?: number
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    id_fra?: number | null
  }

  export type juegosCreateOrConnectWithoutCategoriasInput = {
    where: juegosWhereUniqueInput
    create: XOR<juegosCreateWithoutCategoriasInput, juegosUncheckedCreateWithoutCategoriasInput>
  }

  export type juegosCreateManyCategoriasInputEnvelope = {
    data: juegosCreateManyCategoriasInput | juegosCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type juegosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: juegosWhereUniqueInput
    update: XOR<juegosUpdateWithoutCategoriasInput, juegosUncheckedUpdateWithoutCategoriasInput>
    create: XOR<juegosCreateWithoutCategoriasInput, juegosUncheckedCreateWithoutCategoriasInput>
  }

  export type juegosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: juegosWhereUniqueInput
    data: XOR<juegosUpdateWithoutCategoriasInput, juegosUncheckedUpdateWithoutCategoriasInput>
  }

  export type juegosUpdateManyWithWhereWithoutCategoriasInput = {
    where: juegosScalarWhereInput
    data: XOR<juegosUpdateManyMutationInput, juegosUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type juegosScalarWhereInput = {
    AND?: juegosScalarWhereInput | juegosScalarWhereInput[]
    OR?: juegosScalarWhereInput[]
    NOT?: juegosScalarWhereInput | juegosScalarWhereInput[]
    id_jue?: IntFilter<"juegos"> | number
    nom_jue?: StringFilter<"juegos"> | string
    des_jue?: StringFilter<"juegos"> | string
    pre_ori_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: DecimalNullableFilter<"juegos"> | Decimal | DecimalJsLike | number | string | null
    img_jue?: StringNullableFilter<"juegos"> | string | null
    id_fra?: IntNullableFilter<"juegos"> | number | null
    id_cat?: IntNullableFilter<"juegos"> | number | null
  }

  export type juegosCreateWithoutFranquiciasInput = {
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    categorias?: categoriasCreateNestedOneWithoutJuegosInput
  }

  export type juegosUncheckedCreateWithoutFranquiciasInput = {
    id_jue?: number
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    id_cat?: number | null
  }

  export type juegosCreateOrConnectWithoutFranquiciasInput = {
    where: juegosWhereUniqueInput
    create: XOR<juegosCreateWithoutFranquiciasInput, juegosUncheckedCreateWithoutFranquiciasInput>
  }

  export type juegosCreateManyFranquiciasInputEnvelope = {
    data: juegosCreateManyFranquiciasInput | juegosCreateManyFranquiciasInput[]
    skipDuplicates?: boolean
  }

  export type juegosUpsertWithWhereUniqueWithoutFranquiciasInput = {
    where: juegosWhereUniqueInput
    update: XOR<juegosUpdateWithoutFranquiciasInput, juegosUncheckedUpdateWithoutFranquiciasInput>
    create: XOR<juegosCreateWithoutFranquiciasInput, juegosUncheckedCreateWithoutFranquiciasInput>
  }

  export type juegosUpdateWithWhereUniqueWithoutFranquiciasInput = {
    where: juegosWhereUniqueInput
    data: XOR<juegosUpdateWithoutFranquiciasInput, juegosUncheckedUpdateWithoutFranquiciasInput>
  }

  export type juegosUpdateManyWithWhereWithoutFranquiciasInput = {
    where: juegosScalarWhereInput
    data: XOR<juegosUpdateManyMutationInput, juegosUncheckedUpdateManyWithoutFranquiciasInput>
  }

  export type marcasCreateWithoutHardwareInput = {
    nom_mar: string
    des_mar?: string | null
  }

  export type marcasUncheckedCreateWithoutHardwareInput = {
    id_mar?: number
    nom_mar: string
    des_mar?: string | null
  }

  export type marcasCreateOrConnectWithoutHardwareInput = {
    where: marcasWhereUniqueInput
    create: XOR<marcasCreateWithoutHardwareInput, marcasUncheckedCreateWithoutHardwareInput>
  }

  export type marcasUpsertWithoutHardwareInput = {
    update: XOR<marcasUpdateWithoutHardwareInput, marcasUncheckedUpdateWithoutHardwareInput>
    create: XOR<marcasCreateWithoutHardwareInput, marcasUncheckedCreateWithoutHardwareInput>
    where?: marcasWhereInput
  }

  export type marcasUpdateToOneWithWhereWithoutHardwareInput = {
    where?: marcasWhereInput
    data: XOR<marcasUpdateWithoutHardwareInput, marcasUncheckedUpdateWithoutHardwareInput>
  }

  export type marcasUpdateWithoutHardwareInput = {
    nom_mar?: StringFieldUpdateOperationsInput | string
    des_mar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type marcasUncheckedUpdateWithoutHardwareInput = {
    id_mar?: IntFieldUpdateOperationsInput | number
    nom_mar?: StringFieldUpdateOperationsInput | string
    des_mar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasCreateWithoutJuegosInput = {
    nom_cat: string
  }

  export type categoriasUncheckedCreateWithoutJuegosInput = {
    id_cat?: number
    nom_cat: string
  }

  export type categoriasCreateOrConnectWithoutJuegosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutJuegosInput, categoriasUncheckedCreateWithoutJuegosInput>
  }

  export type franquiciasCreateWithoutJuegosInput = {
    nom_fra: string
    des_fra?: string | null
  }

  export type franquiciasUncheckedCreateWithoutJuegosInput = {
    id_fra?: number
    nom_fra: string
    des_fra?: string | null
  }

  export type franquiciasCreateOrConnectWithoutJuegosInput = {
    where: franquiciasWhereUniqueInput
    create: XOR<franquiciasCreateWithoutJuegosInput, franquiciasUncheckedCreateWithoutJuegosInput>
  }

  export type categoriasUpsertWithoutJuegosInput = {
    update: XOR<categoriasUpdateWithoutJuegosInput, categoriasUncheckedUpdateWithoutJuegosInput>
    create: XOR<categoriasCreateWithoutJuegosInput, categoriasUncheckedCreateWithoutJuegosInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutJuegosInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutJuegosInput, categoriasUncheckedUpdateWithoutJuegosInput>
  }

  export type categoriasUpdateWithoutJuegosInput = {
    nom_cat?: StringFieldUpdateOperationsInput | string
  }

  export type categoriasUncheckedUpdateWithoutJuegosInput = {
    id_cat?: IntFieldUpdateOperationsInput | number
    nom_cat?: StringFieldUpdateOperationsInput | string
  }

  export type franquiciasUpsertWithoutJuegosInput = {
    update: XOR<franquiciasUpdateWithoutJuegosInput, franquiciasUncheckedUpdateWithoutJuegosInput>
    create: XOR<franquiciasCreateWithoutJuegosInput, franquiciasUncheckedCreateWithoutJuegosInput>
    where?: franquiciasWhereInput
  }

  export type franquiciasUpdateToOneWithWhereWithoutJuegosInput = {
    where?: franquiciasWhereInput
    data: XOR<franquiciasUpdateWithoutJuegosInput, franquiciasUncheckedUpdateWithoutJuegosInput>
  }

  export type franquiciasUpdateWithoutJuegosInput = {
    nom_fra?: StringFieldUpdateOperationsInput | string
    des_fra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type franquiciasUncheckedUpdateWithoutJuegosInput = {
    id_fra?: IntFieldUpdateOperationsInput | number
    nom_fra?: StringFieldUpdateOperationsInput | string
    des_fra?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hardwareCreateWithoutMarcasInput = {
    cod_har: string
    nom_har: string
    tipo_har?: string | null
    des_har?: string | null
    img_har?: string | null
    url_har?: string | null
    specs_har?: string | null
  }

  export type hardwareUncheckedCreateWithoutMarcasInput = {
    id_har?: number
    cod_har: string
    nom_har: string
    tipo_har?: string | null
    des_har?: string | null
    img_har?: string | null
    url_har?: string | null
    specs_har?: string | null
  }

  export type hardwareCreateOrConnectWithoutMarcasInput = {
    where: hardwareWhereUniqueInput
    create: XOR<hardwareCreateWithoutMarcasInput, hardwareUncheckedCreateWithoutMarcasInput>
  }

  export type hardwareCreateManyMarcasInputEnvelope = {
    data: hardwareCreateManyMarcasInput | hardwareCreateManyMarcasInput[]
    skipDuplicates?: boolean
  }

  export type hardwareUpsertWithWhereUniqueWithoutMarcasInput = {
    where: hardwareWhereUniqueInput
    update: XOR<hardwareUpdateWithoutMarcasInput, hardwareUncheckedUpdateWithoutMarcasInput>
    create: XOR<hardwareCreateWithoutMarcasInput, hardwareUncheckedCreateWithoutMarcasInput>
  }

  export type hardwareUpdateWithWhereUniqueWithoutMarcasInput = {
    where: hardwareWhereUniqueInput
    data: XOR<hardwareUpdateWithoutMarcasInput, hardwareUncheckedUpdateWithoutMarcasInput>
  }

  export type hardwareUpdateManyWithWhereWithoutMarcasInput = {
    where: hardwareScalarWhereInput
    data: XOR<hardwareUpdateManyMutationInput, hardwareUncheckedUpdateManyWithoutMarcasInput>
  }

  export type hardwareScalarWhereInput = {
    AND?: hardwareScalarWhereInput | hardwareScalarWhereInput[]
    OR?: hardwareScalarWhereInput[]
    NOT?: hardwareScalarWhereInput | hardwareScalarWhereInput[]
    id_har?: IntFilter<"hardware"> | number
    cod_har?: StringFilter<"hardware"> | string
    nom_har?: StringFilter<"hardware"> | string
    tipo_har?: StringNullableFilter<"hardware"> | string | null
    des_har?: StringNullableFilter<"hardware"> | string | null
    img_har?: StringNullableFilter<"hardware"> | string | null
    url_har?: StringNullableFilter<"hardware"> | string | null
    specs_har?: StringNullableFilter<"hardware"> | string | null
    id_mar?: IntNullableFilter<"hardware"> | number | null
  }

  export type juegosCreateManyCategoriasInput = {
    id_jue?: number
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    id_fra?: number | null
  }

  export type juegosUpdateWithoutCategoriasInput = {
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    franquicias?: franquiciasUpdateOneWithoutJuegosNestedInput
  }

  export type juegosUncheckedUpdateWithoutCategoriasInput = {
    id_jue?: IntFieldUpdateOperationsInput | number
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    id_fra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type juegosUncheckedUpdateManyWithoutCategoriasInput = {
    id_jue?: IntFieldUpdateOperationsInput | number
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    id_fra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type juegosCreateManyFranquiciasInput = {
    id_jue?: number
    nom_jue: string
    des_jue: string
    pre_ori_jue?: Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: Decimal | DecimalJsLike | number | string | null
    img_jue?: string | null
    id_cat?: number | null
  }

  export type juegosUpdateWithoutFranquiciasInput = {
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    categorias?: categoriasUpdateOneWithoutJuegosNestedInput
  }

  export type juegosUncheckedUpdateWithoutFranquiciasInput = {
    id_jue?: IntFieldUpdateOperationsInput | number
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    id_cat?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type juegosUncheckedUpdateManyWithoutFranquiciasInput = {
    id_jue?: IntFieldUpdateOperationsInput | number
    nom_jue?: StringFieldUpdateOperationsInput | string
    des_jue?: StringFieldUpdateOperationsInput | string
    pre_ori_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pre_ofe_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porc_desc_jue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img_jue?: NullableStringFieldUpdateOperationsInput | string | null
    id_cat?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type hardwareCreateManyMarcasInput = {
    id_har?: number
    cod_har: string
    nom_har: string
    tipo_har?: string | null
    des_har?: string | null
    img_har?: string | null
    url_har?: string | null
    specs_har?: string | null
  }

  export type hardwareUpdateWithoutMarcasInput = {
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hardwareUncheckedUpdateWithoutMarcasInput = {
    id_har?: IntFieldUpdateOperationsInput | number
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hardwareUncheckedUpdateManyWithoutMarcasInput = {
    id_har?: IntFieldUpdateOperationsInput | number
    cod_har?: StringFieldUpdateOperationsInput | string
    nom_har?: StringFieldUpdateOperationsInput | string
    tipo_har?: NullableStringFieldUpdateOperationsInput | string | null
    des_har?: NullableStringFieldUpdateOperationsInput | string | null
    img_har?: NullableStringFieldUpdateOperationsInput | string | null
    url_har?: NullableStringFieldUpdateOperationsInput | string | null
    specs_har?: NullableStringFieldUpdateOperationsInput | string | null
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