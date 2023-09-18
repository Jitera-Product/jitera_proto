<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace Schema\V2\ProjectSourceExport;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v2.ProjectSourceExport.Framework</code>
 */
class Framework
{
    /**
     * Generated from protobuf enum <code>FRAMEWORK_UNSPECIFIED = 0;</code>
     */
    const FRAMEWORK_UNSPECIFIED = 0;
    /**
     * Generated from protobuf enum <code>NEXTJS = 1;</code>
     */
    const NEXTJS = 1;
    /**
     * Generated from protobuf enum <code>VITE = 2;</code>
     */
    const VITE = 2;
    /**
     * Generated from protobuf enum <code>NUXTJS = 3;</code>
     */
    const NUXTJS = 3;
    /**
     * Generated from protobuf enum <code>NESTJS = 4;</code>
     */
    const NESTJS = 4;
    /**
     * Generated from protobuf enum <code>ROR = 5;</code>
     */
    const ROR = 5;
    /**
     * Generated from protobuf enum <code>LARAVEL = 6;</code>
     */
    const LARAVEL = 6;

    private static $valueToName = [
        self::FRAMEWORK_UNSPECIFIED => 'FRAMEWORK_UNSPECIFIED',
        self::NEXTJS => 'NEXTJS',
        self::VITE => 'VITE',
        self::NUXTJS => 'NUXTJS',
        self::NESTJS => 'NESTJS',
        self::ROR => 'ROR',
        self::LARAVEL => 'LARAVEL',
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
class_alias(Framework::class, \Schema\V2\ProjectSourceExport_Framework::class);
