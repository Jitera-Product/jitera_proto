<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.Operator</code>
 */
class Operator
{
    /**
     * Generated from protobuf enum <code>WHERE = 0;</code>
     */
    const WHERE = 0;
    /**
     * Generated from protobuf enum <code>PAGINATION = 1;</code>
     */
    const PAGINATION = 1;
    /**
     * Generated from protobuf enum <code>ORDER = 2;</code>
     */
    const ORDER = 2;
    /**
     * Generated from protobuf enum <code>ORDER_ASC = 3;</code>
     */
    const ORDER_ASC = 3;
    /**
     * Generated from protobuf enum <code>ORDER_DESC = 4;</code>
     */
    const ORDER_DESC = 4;
    /**
     * Generated from protobuf enum <code>JOIN_AND = 5;</code>
     */
    const JOIN_AND = 5;
    /**
     * Generated from protobuf enum <code>JOIN_OR = 6;</code>
     */
    const JOIN_OR = 6;
    /**
     * Generated from protobuf enum <code>EQUAL = 7;</code>
     */
    const EQUAL = 7;
    /**
     * Generated from protobuf enum <code>START_WITH = 8;</code>
     */
    const START_WITH = 8;
    /**
     * Generated from protobuf enum <code>END_WITH = 9;</code>
     */
    const END_WITH = 9;
    /**
     * Generated from protobuf enum <code>CONTAIN = 10;</code>
     */
    const CONTAIN = 10;
    /**
     * Generated from protobuf enum <code>NOT_EQUAL = 11;</code>
     */
    const NOT_EQUAL = 11;
    /**
     * Generated from protobuf enum <code>GREATER_THAN = 12;</code>
     */
    const GREATER_THAN = 12;
    /**
     * Generated from protobuf enum <code>LESS_THAN = 13;</code>
     */
    const LESS_THAN = 13;
    /**
     * Generated from protobuf enum <code>GREATER_OR_EQUAL_THAN = 14;</code>
     */
    const GREATER_OR_EQUAL_THAN = 14;
    /**
     * Generated from protobuf enum <code>LESS_OR_EQUAL_THAN = 15;</code>
     */
    const LESS_OR_EQUAL_THAN = 15;
    /**
     * Generated from protobuf enum <code>WHERE_AND = 16;</code>
     */
    const WHERE_AND = 16;
    /**
     * Generated from protobuf enum <code>WHERE_OR = 17;</code>
     */
    const WHERE_OR = 17;

    private static $valueToName = [
        self::WHERE => 'WHERE',
        self::PAGINATION => 'PAGINATION',
        self::ORDER => 'ORDER',
        self::ORDER_ASC => 'ORDER_ASC',
        self::ORDER_DESC => 'ORDER_DESC',
        self::JOIN_AND => 'JOIN_AND',
        self::JOIN_OR => 'JOIN_OR',
        self::EQUAL => 'EQUAL',
        self::START_WITH => 'START_WITH',
        self::END_WITH => 'END_WITH',
        self::CONTAIN => 'CONTAIN',
        self::NOT_EQUAL => 'NOT_EQUAL',
        self::GREATER_THAN => 'GREATER_THAN',
        self::LESS_THAN => 'LESS_THAN',
        self::GREATER_OR_EQUAL_THAN => 'GREATER_OR_EQUAL_THAN',
        self::LESS_OR_EQUAL_THAN => 'LESS_OR_EQUAL_THAN',
        self::WHERE_AND => 'WHERE_AND',
        self::WHERE_OR => 'WHERE_OR',
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
