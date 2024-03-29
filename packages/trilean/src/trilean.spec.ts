import { describe, expect, it } from 'vitest';
import { ZTrilean } from './trilean.mjs';

describe('ZTrilean', () => {
  describe('stringify', () => {
    it('should return true for true', () => {
      expect(ZTrilean.stringify(true)).toEqual('true');
    });

    it('should return false for false', () => {
      expect(ZTrilean.stringify(false)).toEqual('false');
    });

    it('should return indeterminate for indeterminate', () => {
      expect(ZTrilean.stringify(ZTrilean.Indeterminate)).toEqual('indeterminate');
    });
  });

  describe('parse', () => {
    it('should return true for true', () => {
      expect(ZTrilean.parse('trUe')).toEqual(true);
    });

    it('should return false for false', () => {
      expect(ZTrilean.parse('fAlSe')).toEqual(false);
    });

    it('should return null for indeterminate', () => {
      expect(ZTrilean.parse('indeTermiNate', true)).toEqual(ZTrilean.Indeterminate);
    });

    it('should return fallback for null', () => {
      expect(ZTrilean.parse(null)).toEqual(false);
    });

    it('should return fallback for undefined', () => {
      expect(ZTrilean.parse(undefined, ZTrilean.Indeterminate)).toEqual(ZTrilean.Indeterminate);
    });

    it('should return false for bad value with no fallback', () => {
      expect(ZTrilean.parse('lol-wut')).toEqual(false);
    });

    it('should return fallback for bad value', () => {
      expect(ZTrilean.parse('lol-wut', true)).toEqual(true);
    });
  });

  describe('convert', () => {
    it('should be fallback for null', () => {
      expect(ZTrilean.convert(null, true)).toEqual(true);
    });

    it('should be fallback for undefined', () => {
      expect(ZTrilean.convert(undefined)).toEqual(false);
    });

    it('should be true for true', () => {
      expect(ZTrilean.convert(true)).toEqual(true);
    });

    it('should be false for false', () => {
      expect(ZTrilean.convert(false)).toEqual(false);
    });

    it('should be indeterminate for indeterminate', () => {
      expect(ZTrilean.convert(ZTrilean.Indeterminate)).toEqual(ZTrilean.Indeterminate);
    });

    it('should be true for a truthy value', () => {
      expect(ZTrilean.convert(1)).toEqual(true);
    });

    it('should be false for a falsy value', () => {
      expect(ZTrilean.convert(NaN)).toEqual(false);
    });

    it('should be true for the true string', () => {
      expect(ZTrilean.convert('trUE')).toEqual(true);
    });

    it('should be false for the false string', () => {
      expect(ZTrilean.convert('fAlSE')).toEqual(false);
    });

    it('should be null for the indeterminate string', () => {
      expect(ZTrilean.convert('IndetermInate')).toEqual(ZTrilean.Indeterminate);
    });
  });
});
