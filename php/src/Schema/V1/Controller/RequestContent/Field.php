<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Controller\RequestContent;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Controller.RequestContent.Field</code>
 */
class Field extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>.schema.v1.DataType data_type = 2;</code>
     */
    protected $data_type = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.RequestContent.Field children = 3;</code>
     */
    private $children;
    /**
     * Generated from protobuf field <code>repeated string enum_values = 4;</code>
     */
    private $enum_values;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type \Schema\V1\DataType $data_type
     *     @type array<\Schema\V1\Controller\RequestContent\Field>|\Google\Protobuf\Internal\RepeatedField $children
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $enum_values
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.DataType data_type = 2;</code>
     * @return \Schema\V1\DataType|null
     */
    public function getDataType()
    {
        return $this->data_type;
    }

    public function hasDataType()
    {
        return isset($this->data_type);
    }

    public function clearDataType()
    {
        unset($this->data_type);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.DataType data_type = 2;</code>
     * @param \Schema\V1\DataType $var
     * @return $this
     */
    public function setDataType($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\DataType::class);
        $this->data_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.RequestContent.Field children = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.RequestContent.Field children = 3;</code>
     * @param array<\Schema\V1\Controller\RequestContent\Field>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setChildren($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Controller\RequestContent\Field::class);
        $this->children = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string enum_values = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getEnumValues()
    {
        return $this->enum_values;
    }

    /**
     * Generated from protobuf field <code>repeated string enum_values = 4;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setEnumValues($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->enum_values = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Field::class, \Schema\V1\Controller_RequestContent_Field::class);

