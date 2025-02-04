/**
 * Possible transformation options for the @Exclude decorator.
 */
export interface ExcludeOptions {
  /**
   * First version where this property should be excluded.
   *
   * Example:
   * ```ts
   * classToPlain(payload, { version: 1.0 });
   * ```
   */
  since?: number;

  /**
   * Last version where this property should be excluded.
   *
   * Example:
   * ```ts
   * classToPlain(payload, { version: 1.0 });
   * ```
   */
  until?: number;

  /**
   * List of transformation groups this property belongs to. When set,
   * the property will be excluded only when transform is called with
   * one of the groups specified.
   *
   * Example:
   * ```ts
   * classToPlain(payload, { groups: ['user'] });
   * ```
   */
  groups?: string[];

  /**
   * Expose this property only when transforming from plain to class instance.
   */
  toClassOnly?: boolean;

  /**
   * Expose this property only when transforming from class instance to plain object.
   */
  toPlainOnly?: boolean;
}
