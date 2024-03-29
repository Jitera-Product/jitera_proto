<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Feature;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.Feature.EmailServiceProvider</code>
 */
class EmailServiceProvider
{
    /**
     * Generated from protobuf enum <code>AWS_SES = 0;</code>
     */
    const AWS_SES = 0;
    /**
     * Generated from protobuf enum <code>SENDGRID = 1;</code>
     */
    const SENDGRID = 1;
    /**
     * Generated from protobuf enum <code>GMAIL = 2;</code>
     */
    const GMAIL = 2;
    /**
     * Generated from protobuf enum <code>MAILTRAP = 3;</code>
     */
    const MAILTRAP = 3;
    /**
     * Generated from protobuf enum <code>GENERIC_SMTP = 4;</code>
     */
    const GENERIC_SMTP = 4;

    private static $valueToName = [
        self::AWS_SES => 'AWS_SES',
        self::SENDGRID => 'SENDGRID',
        self::GMAIL => 'GMAIL',
        self::MAILTRAP => 'MAILTRAP',
        self::GENERIC_SMTP => 'GENERIC_SMTP',
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
class_alias(EmailServiceProvider::class, \Schema\V1\Feature_EmailServiceProvider::class);

