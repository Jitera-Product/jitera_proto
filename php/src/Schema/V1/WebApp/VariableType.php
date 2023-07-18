<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\WebApp;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.WebApp.VariableType</code>
 */
class VariableType
{
    /**
     * Generated from protobuf enum <code>JS = 0;</code>
     */
    const JS = 0;
    /**
     * Generated from protobuf enum <code>CSS = 1;</code>
     */
    const CSS = 1;

    private static $valueToName = [
        self::JS => 'JS',
        self::CSS => 'CSS',
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
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(VariableType::class, \Schema\V1\WebApp_VariableType::class);

