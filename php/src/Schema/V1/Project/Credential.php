<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Project;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Project.Credential</code>
 */
class Credential extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.Project.Environment name = 1;</code>
     */
    protected $name = 0;
    /**
     * Generated from protobuf field <code>string value = 2;</code>
     */
    protected $value = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $name
     *     @type string $value
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Project.Environment name = 1;</code>
     * @return int
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Project.Environment name = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Project\Environment::class);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string value = 2;</code>
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Generated from protobuf field <code>string value = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->value = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Credential::class, \Schema\V1\Project_Credential::class);
