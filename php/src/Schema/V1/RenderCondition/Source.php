<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\RenderCondition;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.RenderCondition.Source</code>
 */
class Source
{
    /**
     * Generated from protobuf enum <code>BINARY = 0;</code>
     */
    const BINARY = 0;
    /**
     * Generated from protobuf enum <code>GLOBAL = 1;</code>
     */
    const PBGLOBAL = 1;

    private static $valueToName = [
        self::BINARY => 'BINARY',
        self::PBGLOBAL => 'GLOBAL',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            $pbconst =  __CLASS__. '::PB' . strtoupper($name);
            if (!defined($pbconst)) {
                throw new UnexpectedValueException(sprintf(
                        'Enum %s has no value defined for name %s', __CLASS__, $name));
            }
            return constant($pbconst);
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Source::class, \Schema\V1\RenderCondition_Source::class);

