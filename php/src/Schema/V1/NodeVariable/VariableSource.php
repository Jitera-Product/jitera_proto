<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\NodeVariable;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.NodeVariable.VariableSource</code>
 */
class VariableSource
{
    /**
     * Generated from protobuf enum <code>PARAMS = 0;</code>
     */
    const PARAMS = 0;
    /**
     * Generated from protobuf enum <code>FORM_VALUES = 1;</code>
     */
    const FORM_VALUES = 1;
    /**
     * Generated from protobuf enum <code>ACTION_RESPONSE = 2;</code>
     */
    const ACTION_RESPONSE = 2;
    /**
     * Generated from protobuf enum <code>STORAGE = 3;</code>
     */
    const STORAGE = 3;
    /**
     * Generated from protobuf enum <code>AUTHENTICATED_USER = 4;</code>
     */
    const AUTHENTICATED_USER = 4;
    /**
     * Generated from protobuf enum <code>MOLECULE_PROPS = 5;</code>
     */
    const MOLECULE_PROPS = 5;
    /**
     * Generated from protobuf enum <code>PROJECT_ASSET = 6;</code>
     */
    const PROJECT_ASSET = 6;
    /**
     * Generated from protobuf enum <code>CONTEXT_VALUES = 7;</code>
     */
    const CONTEXT_VALUES = 7;
    /**
     * Generated from protobuf enum <code>LOCAL_CONTEXT_RESPONSE = 8;</code>
     */
    const LOCAL_CONTEXT_RESPONSE = 8;
    /**
     * Generated from protobuf enum <code>FORM_VALIDATION_ERROR_MESSAGE = 9;</code>
     */
    const FORM_VALIDATION_ERROR_MESSAGE = 9;
    /**
     * Generated from protobuf enum <code>CSS_VARIABLE = 10;</code>
     */
    const CSS_VARIABLE = 10;
    /**
     * Generated from protobuf enum <code>LOCALIZATION = 11;</code>
     */
    const LOCALIZATION = 11;
    /**
     * Generated from protobuf enum <code>NAVIGATION = 12;</code>
     */
    const NAVIGATION = 12;

    private static $valueToName = [
        self::PARAMS => 'PARAMS',
        self::FORM_VALUES => 'FORM_VALUES',
        self::ACTION_RESPONSE => 'ACTION_RESPONSE',
        self::STORAGE => 'STORAGE',
        self::AUTHENTICATED_USER => 'AUTHENTICATED_USER',
        self::MOLECULE_PROPS => 'MOLECULE_PROPS',
        self::PROJECT_ASSET => 'PROJECT_ASSET',
        self::CONTEXT_VALUES => 'CONTEXT_VALUES',
        self::LOCAL_CONTEXT_RESPONSE => 'LOCAL_CONTEXT_RESPONSE',
        self::FORM_VALIDATION_ERROR_MESSAGE => 'FORM_VALIDATION_ERROR_MESSAGE',
        self::CSS_VARIABLE => 'CSS_VARIABLE',
        self::LOCALIZATION => 'LOCALIZATION',
        self::NAVIGATION => 'NAVIGATION',
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
class_alias(VariableSource::class, \Schema\V1\NodeVariable_VariableSource::class);

