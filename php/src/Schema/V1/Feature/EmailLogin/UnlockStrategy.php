<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Feature\EmailLogin;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.Feature.EmailLogin.UnlockStrategy</code>
 */
class UnlockStrategy
{
    /**
     * Generated from protobuf enum <code>TIME = 0;</code>
     */
    const TIME = 0;
    /**
     * Generated from protobuf enum <code>EMAIL = 1;</code>
     */
    const EMAIL = 1;
    /**
     * Generated from protobuf enum <code>BOTH = 2;</code>
     */
    const BOTH = 2;

    private static $valueToName = [
        self::TIME => 'TIME',
        self::EMAIL => 'EMAIL',
        self::BOTH => 'BOTH',
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
class_alias(UnlockStrategy::class, \Schema\V1\Feature_EmailLogin_UnlockStrategy::class);

