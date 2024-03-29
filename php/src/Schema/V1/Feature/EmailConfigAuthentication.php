<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Feature;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.Feature.EmailConfigAuthentication</code>
 */
class EmailConfigAuthentication
{
    /**
     * Generated from protobuf enum <code>PLAIN = 0;</code>
     */
    const PLAIN = 0;
    /**
     * Generated from protobuf enum <code>LOGIN = 1;</code>
     */
    const LOGIN = 1;
    /**
     * Generated from protobuf enum <code>CRAM_MD5 = 2;</code>
     */
    const CRAM_MD5 = 2;

    private static $valueToName = [
        self::PLAIN => 'PLAIN',
        self::LOGIN => 'LOGIN',
        self::CRAM_MD5 => 'CRAM_MD5',
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
class_alias(EmailConfigAuthentication::class, \Schema\V1\Feature_EmailConfigAuthentication::class);

