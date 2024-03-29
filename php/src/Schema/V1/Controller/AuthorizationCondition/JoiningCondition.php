<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Controller\AuthorizationCondition;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.Controller.AuthorizationCondition.JoiningCondition</code>
 */
class JoiningCondition
{
    /**
     * Generated from protobuf enum <code>AND_JOIN = 0;</code>
     */
    const AND_JOIN = 0;
    /**
     * Generated from protobuf enum <code>OR_JOIN = 1;</code>
     */
    const OR_JOIN = 1;

    private static $valueToName = [
        self::AND_JOIN => 'AND_JOIN',
        self::OR_JOIN => 'OR_JOIN',
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
class_alias(JoiningCondition::class, \Schema\V1\Controller_AuthorizationCondition_JoiningCondition::class);

