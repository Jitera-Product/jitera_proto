<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Table\Column\DateType;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.Table.Column.DateType.Condition</code>
 */
class Condition
{
    /**
     * Generated from protobuf enum <code>IN_PAST = 0;</code>
     */
    const IN_PAST = 0;
    /**
     * Generated from protobuf enum <code>IN_FUTURE = 1;</code>
     */
    const IN_FUTURE = 1;

    private static $valueToName = [
        self::IN_PAST => 'IN_PAST',
        self::IN_FUTURE => 'IN_FUTURE',
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
class_alias(Condition::class, \Schema\V1\Table_Column_DateType_Condition::class);

