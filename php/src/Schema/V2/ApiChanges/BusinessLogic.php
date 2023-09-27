<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace Schema\V2\ApiChanges;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.ApiChanges.BusinessLogic</code>
 */
class BusinessLogic extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string name = 2;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>optional int32 usecaseId = 3;</code>
     */
    protected $usecaseId = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $name
     *     @type int $usecaseId
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\ProjectSource::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 2;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2;</code>
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
     * Generated from protobuf field <code>optional int32 usecaseId = 3;</code>
     * @return int
     */
    public function getUsecaseId()
    {
        return isset($this->usecaseId) ? $this->usecaseId : 0;
    }

    public function hasUsecaseId()
    {
        return isset($this->usecaseId);
    }

    public function clearUsecaseId()
    {
        unset($this->usecaseId);
    }

    /**
     * Generated from protobuf field <code>optional int32 usecaseId = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setUsecaseId($var)
    {
        GPBUtil::checkInt32($var);
        $this->usecaseId = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(BusinessLogic::class, \Schema\V2\ApiChanges_BusinessLogic::class);
