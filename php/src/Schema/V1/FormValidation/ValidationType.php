<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\FormValidation;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.FormValidation.ValidationType</code>
 */
class ValidationType
{
    /**
     * Generated from protobuf enum <code>TEXT = 0;</code>
     */
    const TEXT = 0;
    /**
     * Generated from protobuf enum <code>NUMBER = 1;</code>
     */
    const NUMBER = 1;
    /**
     * Generated from protobuf enum <code>EMAIL = 2;</code>
     */
    const EMAIL = 2;
    /**
     * Generated from protobuf enum <code>PASSWORD = 3;</code>
     */
    const PASSWORD = 3;
    /**
     * Generated from protobuf enum <code>PHONE_NUMBER = 4;</code>
     */
    const PHONE_NUMBER = 4;

    private static $valueToName = [
        self::TEXT => 'TEXT',
        self::NUMBER => 'NUMBER',
        self::EMAIL => 'EMAIL',
        self::PASSWORD => 'PASSWORD',
        self::PHONE_NUMBER => 'PHONE_NUMBER',
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
class_alias(ValidationType::class, \Schema\V1\FormValidation_ValidationType::class);

