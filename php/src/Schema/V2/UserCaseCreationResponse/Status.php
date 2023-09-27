<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/user_case_creation.proto

namespace Schema\V2\UserCaseCreationResponse;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v2.UserCaseCreationResponse.Status</code>
 */
class Status
{
    /**
     * Generated from protobuf enum <code>STATUS_UNSPECIFIED = 0;</code>
     */
    const STATUS_UNSPECIFIED = 0;
    /**
     * Generated from protobuf enum <code>STARTED = 1;</code>
     */
    const STARTED = 1;
    /**
     * Generated from protobuf enum <code>SUCCEEDED = 2;</code>
     */
    const SUCCEEDED = 2;
    /**
     * Generated from protobuf enum <code>FAILED = 3;</code>
     */
    const FAILED = 3;

    private static $valueToName = [
        self::STATUS_UNSPECIFIED => 'STATUS_UNSPECIFIED',
        self::STARTED => 'STARTED',
        self::SUCCEEDED => 'SUCCEEDED',
        self::FAILED => 'FAILED',
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
class_alias(Status::class, \Schema\V2\UserCaseCreationResponse_Status::class);
