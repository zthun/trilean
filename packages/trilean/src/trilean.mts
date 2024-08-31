/**
 * The indeterminate type.
 *
 * Note that the indeterminate type is officially a string
 * here instead of null.  This is by design since null
 * is considered to have no value.
 *
 * Instead of checking for the indeterminate string, always
 * make sure to use ZTrilean.isIndeterminate(val) to check
 * for this type.
 *
 * When setting the indeterminate value, use
 * ZTrilean.Indeterminate as the value to set.
 *
 * @example
 *
 * ```ts
 * const value: indeterminate = ZTrilean.Indeterminate;
 * ```
 */
export type indeterminate = "indeterminate";

/**
 * Represents a tri logic state.
 *
 * See {@link indeterminate} for what the symbol value should be.
 */
export type trilean = boolean | indeterminate;

/**
 * A utility class for trilean values.
 */
export abstract class ZTrilean {
  /**
   * A constant value that represents an indeterminate value.
   */
  public static readonly Indeterminate: indeterminate = "indeterminate";

  /**
   * Converts a trilean value to a string.
   *
   * @param x -
   *        The value to convert.
   *
   * @returns
   *        A string of true if x is true, false if x is false,
   *        and indeterminate if x is the indeterminate symbol.
   */
  public static stringify(x: trilean): string {
    return String(x);
  }

  /**
   * Converts a string to a trilean value.
   *
   * @param str -
   *        The text to parse.
   * @param fallback -
   *        The fallback in the case that str is not a parsable value.
   *
   * @returns
   *        The parsed trilean value or fallback if str is not a valid
   *        trilean value.
   */
  public static parse(
    str: string | null | undefined,
    fallback: trilean = false,
  ): trilean {
    if (str?.toUpperCase().localeCompare("TRUE") === 0) {
      return true;
    }

    if (str?.toUpperCase().localeCompare("FALSE") === 0) {
      return false;
    }

    if (str?.toUpperCase().localeCompare("INDETERMINATE") === 0) {
      return ZTrilean.Indeterminate;
    }

    return fallback;
  }

  /**
   * Gets a value that determines if val is a trilean supported value.
   *
   * @param val -
   *        The value to test.
   *
   * @returns
   *        True if val is a trilean value.  False otherwise.
   */
  public static is(val: any): val is trilean {
    return typeof val === "boolean" || ZTrilean.isIndeterminate(val);
  }

  /**
   * Gets whether val is the indeterminate value.
   */
  public static isIndeterminate(val: trilean): val is indeterminate {
    return val === ZTrilean.Indeterminate;
  }

  /**
   * Converts from a value to a trilean value.
   *
   * This is similar to parse, but it also supports non
   * string inputs which will be converted to a boolean.
   *
   * @param val -
   *        The value to convert.
   * @param fallback -
   *        The fallback value in the case that val cannot be converted. This will
   *        only be used in the case that val is a string, null, or undefined.
   *
   * @returns
   *        The trilean value of val.  If val is null or undefined, then
   *        fallback is returned.  If val is a string, then the return value of
   *        {@link parse} will be used.  If val is a boolean, then it will be
   *        directly returned.  If val is equal to {@link Indeterminate}, then
   *        {@link Indeterminate} will be returned.  Otherwise, the truthy
   *        nature of value will be returned.
   */
  public static convert(val: any, fallback: trilean = false): trilean {
    if (val == null) {
      return fallback;
    }

    if (ZTrilean.is(val)) {
      return val;
    }

    if (typeof val === "string") {
      return ZTrilean.parse(val, fallback);
    }

    return !!val;
  }
}
