<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\NodeReference;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.NodeReference.ReferenceRefType</code>
 */
class ReferenceRefType
{
    /**
     * Generated from protobuf enum <code>NONE = 0;</code>
     */
    const NONE = 0;
    /**
     * Generated from protobuf enum <code>API_REQUEST = 1;</code>
     */
    const API_REQUEST = 1;
    /**
     * Generated from protobuf enum <code>API_REQUEST_PARAM = 2;</code>
     */
    const API_REQUEST_PARAM = 2;
    /**
     * Generated from protobuf enum <code>API_BUSINESS_PROCESS = 3;</code>
     */
    const API_BUSINESS_PROCESS = 3;
    /**
     * Generated from protobuf enum <code>API_RESPONSE_DATA = 4;</code>
     */
    const API_RESPONSE_DATA = 4;
    /**
     * Generated from protobuf enum <code>COLUMN_DEFINITION = 5;</code>
     */
    const COLUMN_DEFINITION = 5;
    /**
     * Generated from protobuf enum <code>MOBILE_APP_ASSET = 6;</code>
     */
    const MOBILE_APP_ASSET = 6;
    /**
     * Generated from protobuf enum <code>MOBILE_APP_PAGE = 7;</code>
     */
    const MOBILE_APP_PAGE = 7;
    /**
     * Generated from protobuf enum <code>MOBILE_APP_PAGE_ACTION = 8;</code>
     */
    const MOBILE_APP_PAGE_ACTION = 8;
    /**
     * Generated from protobuf enum <code>MOBILE_APP_PAGE_NODE = 9;</code>
     */
    const MOBILE_APP_PAGE_NODE = 9;
    /**
     * Generated from protobuf enum <code>MOBILE_APP_PAGE_PARAM = 10;</code>
     */
    const MOBILE_APP_PAGE_PARAM = 10;
    /**
     * Generated from protobuf enum <code>MOBILE_APP_PAGE_FORM = 11;</code>
     */
    const MOBILE_APP_PAGE_FORM = 11;
    /**
     * Generated from protobuf enum <code>MOBILE_NAVIGATION = 12;</code>
     */
    const MOBILE_NAVIGATION = 12;
    /**
     * Generated from protobuf enum <code>MOBILE_NAVIGATION_NODE = 13;</code>
     */
    const MOBILE_NAVIGATION_NODE = 13;
    /**
     * Generated from protobuf enum <code>MOBILE_MOLECULE_PROP = 14;</code>
     */
    const MOBILE_MOLECULE_PROP = 14;
    /**
     * Generated from protobuf enum <code>TABLE_DEFINITION = 15;</code>
     */
    const TABLE_DEFINITION = 15;
    /**
     * Generated from protobuf enum <code>PROJECT_VARIABLE = 16;</code>
     */
    const PROJECT_VARIABLE = 16;

    private static $valueToName = [
        self::NONE => 'NONE',
        self::API_REQUEST => 'API_REQUEST',
        self::API_REQUEST_PARAM => 'API_REQUEST_PARAM',
        self::API_BUSINESS_PROCESS => 'API_BUSINESS_PROCESS',
        self::API_RESPONSE_DATA => 'API_RESPONSE_DATA',
        self::COLUMN_DEFINITION => 'COLUMN_DEFINITION',
        self::MOBILE_APP_ASSET => 'MOBILE_APP_ASSET',
        self::MOBILE_APP_PAGE => 'MOBILE_APP_PAGE',
        self::MOBILE_APP_PAGE_ACTION => 'MOBILE_APP_PAGE_ACTION',
        self::MOBILE_APP_PAGE_NODE => 'MOBILE_APP_PAGE_NODE',
        self::MOBILE_APP_PAGE_PARAM => 'MOBILE_APP_PAGE_PARAM',
        self::MOBILE_APP_PAGE_FORM => 'MOBILE_APP_PAGE_FORM',
        self::MOBILE_NAVIGATION => 'MOBILE_NAVIGATION',
        self::MOBILE_NAVIGATION_NODE => 'MOBILE_NAVIGATION_NODE',
        self::MOBILE_MOLECULE_PROP => 'MOBILE_MOLECULE_PROP',
        self::TABLE_DEFINITION => 'TABLE_DEFINITION',
        self::PROJECT_VARIABLE => 'PROJECT_VARIABLE',
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
class_alias(ReferenceRefType::class, \Schema\V1\NodeReference_ReferenceRefType::class);

