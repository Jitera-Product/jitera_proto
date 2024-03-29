<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Table\Column;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.Column.EnumType</code>
 */
class EnumType extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string default_value = 1;</code>
     */
    protected $default_value = '';
    /**
     * Generated from protobuf field <code>repeated string values = 2;</code>
     */
    private $values;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $default_value
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $values
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string default_value = 1;</code>
     * @return string
     */
    public function getDefaultValue()
    {
        return $this->default_value;
    }

    /**
     * Generated from protobuf field <code>string default_value = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setDefaultValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->default_value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string values = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getValues()
    {
        return $this->values;
    }

    /**
     * Generated from protobuf field <code>repeated string values = 2;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setValues($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->values = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(EnumType::class, \Schema\V1\Table_Column_EnumType::class);

