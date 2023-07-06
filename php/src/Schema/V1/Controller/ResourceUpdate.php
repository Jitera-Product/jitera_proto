<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Controller;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Controller.ResourceUpdate</code>
 */
class ResourceUpdate extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.ResourceUpdate.Field fields = 1;</code>
     */
    private $fields;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Schema\V1\Controller\ResourceUpdate\Field>|\Google\Protobuf\Internal\RepeatedField $fields
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.ResourceUpdate.Field fields = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getFields()
    {
        return $this->fields;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.ResourceUpdate.Field fields = 1;</code>
     * @param array<\Schema\V1\Controller\ResourceUpdate\Field>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setFields($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Controller\ResourceUpdate\Field::class);
        $this->fields = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(ResourceUpdate::class, \Schema\V1\Controller_ResourceUpdate::class);
