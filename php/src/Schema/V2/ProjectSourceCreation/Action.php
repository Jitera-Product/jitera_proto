<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace Schema\V2\ProjectSourceCreation;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v2.ProjectSourceCreation.Action</code>
 */
class Action
{
    /**
     * Generated from protobuf enum <code>INDEX_CODE = 0;</code>
     */
    const INDEX_CODE = 0;
    /**
     * Generated from protobuf enum <code>ANALYZE_CODE = 1;</code>
     */
    const ANALYZE_CODE = 1;
    /**
     * Generated from protobuf enum <code>CODE_TO_ERD = 2;</code>
     */
    const CODE_TO_ERD = 2;

    private static $valueToName = [
        self::INDEX_CODE => 'INDEX_CODE',
        self::ANALYZE_CODE => 'ANALYZE_CODE',
        self::CODE_TO_ERD => 'CODE_TO_ERD',
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
class_alias(Action::class, \Schema\V2\ProjectSourceCreation_Action::class);

