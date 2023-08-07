<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Controller\Response;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Controller.Response.Field</code>
 */
class Field extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>.schema.v1.DataType data_type = 5;</code>
     */
    protected $data_type = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.Response.Field children = 6;</code>
     */
    private $children;
    /**
     * Generated from protobuf field <code>string category = 7;</code>
     */
    protected $category = '';
    /**
     * Generated from protobuf field <code>string alias = 8;</code>
     */
    protected $alias = '';
    protected $map_to;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $resource
     *     @type string $property
     *     @type string $value
     *     @type \Schema\V1\DataType $data_type
     *     @type array<\Schema\V1\Controller\Response\Field>|\Google\Protobuf\Internal\RepeatedField $children
     *     @type string $category
     *     @type string $alias
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
     * Generated from protobuf field <code>string resource = 2;</code>
     * @return string
     */
    public function getResource()
    {
        return $this->readOneof(2);
    }

    public function hasResource()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>string resource = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setResource($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string property = 3;</code>
     * @return string
     */
    public function getProperty()
    {
        return $this->readOneof(3);
    }

    public function hasProperty()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>string property = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setProperty($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string value = 4;</code>
     * @return string
     */
    public function getValue()
    {
        return $this->readOneof(4);
    }

    public function hasValue()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>string value = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.DataType data_type = 5;</code>
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
     * Generated from protobuf field <code>.schema.v1.DataType data_type = 5;</code>
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
     * Generated from protobuf field <code>repeated .schema.v1.Controller.Response.Field children = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.Response.Field children = 6;</code>
     * @param array<\Schema\V1\Controller\Response\Field>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setChildren($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Controller\Response\Field::class);
        $this->children = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string category = 7;</code>
     * @return string
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Generated from protobuf field <code>string category = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setCategory($var)
    {
        GPBUtil::checkString($var, True);
        $this->category = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string alias = 8;</code>
     * @return string
     */
    public function getAlias()
    {
        return $this->alias;
    }

    /**
     * Generated from protobuf field <code>string alias = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setAlias($var)
    {
        GPBUtil::checkString($var, True);
        $this->alias = $var;

        return $this;
    }

    /**
     * @return string
     */
    public function getMapTo()
    {
        return $this->whichOneof("map_to");
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Field::class, \Schema\V1\Controller_Response_Field::class);

