<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use UnexpectedValueException;

/**
 * Protobuf type <code>schema.v1.DataTypeName</code>
 */
class DataTypeName
{
    /**
     * Generated from protobuf enum <code>BOOLEAN = 0;</code>
     */
    const BOOLEAN = 0;
    /**
     * Generated from protobuf enum <code>INTEGER = 1;</code>
     */
    const INTEGER = 1;
    /**
     * Generated from protobuf enum <code>FLOAT = 2;</code>
     */
    const FLOAT = 2;
    /**
     * Generated from protobuf enum <code>STRING = 3;</code>
     */
    const STRING = 3;
    /**
     * Generated from protobuf enum <code>TEXT = 4;</code>
     */
    const TEXT = 4;
    /**
     * Generated from protobuf enum <code>DATE = 5;</code>
     */
    const DATE = 5;
    /**
     * Generated from protobuf enum <code>DATETIME = 6;</code>
     */
    const DATETIME = 6;
    /**
     * Generated from protobuf enum <code>ARRAY = 7;</code>
     */
    const PBARRAY = 7;
    /**
     * Generated from protobuf enum <code>OBJECT = 8;</code>
     */
    const OBJECT = 8;
    /**
     * Generated from protobuf enum <code>PAGE_SIZE = 9;</code>
     */
    const PAGE_SIZE = 9;
    /**
     * Generated from protobuf enum <code>PAGE_NUMBER = 10;</code>
     */
    const PAGE_NUMBER = 10;
    /**
     * Generated from protobuf enum <code>FILE = 11;</code>
     */
    const FILE = 11;
    /**
     * Generated from protobuf enum <code>TABLE = 12;</code>
     */
    const TABLE = 12;
    /**
     * Generated from protobuf enum <code>ENUM = 13;</code>
     */
    const ENUM = 13;
    /**
     * Generated from protobuf enum <code>CURRENT_USER = 14;</code>
     */
    const CURRENT_USER = 14;
    /**
     * Generated from protobuf enum <code>COUNTER_CACHE = 15;</code>
     */
    const COUNTER_CACHE = 15;
    /**
     * Generated from protobuf enum <code>ID = 16;</code>
     */
    const ID = 16;

    private static $valueToName = [
        self::BOOLEAN => 'BOOLEAN',
        self::INTEGER => 'INTEGER',
        self::FLOAT => 'FLOAT',
        self::STRING => 'STRING',
        self::TEXT => 'TEXT',
        self::DATE => 'DATE',
        self::DATETIME => 'DATETIME',
        self::PBARRAY => 'ARRAY',
        self::OBJECT => 'OBJECT',
        self::PAGE_SIZE => 'PAGE_SIZE',
        self::PAGE_NUMBER => 'PAGE_NUMBER',
        self::FILE => 'FILE',
        self::TABLE => 'TABLE',
        self::ENUM => 'ENUM',
        self::CURRENT_USER => 'CURRENT_USER',
        self::COUNTER_CACHE => 'COUNTER_CACHE',
        self::ID => 'ID',
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
            $pbconst =  __CLASS__. '::PB' . strtoupper($name);
            if (!defined($pbconst)) {
                throw new UnexpectedValueException(sprintf(
                        'Enum %s has no value defined for name %s', __CLASS__, $name));
            }
            return constant($pbconst);
        }
        return constant($const);
    }
}

