<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace Schema\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.ApiChanges</code>
 */
class ApiChanges extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSource project_source = 1;</code>
     */
    protected $project_source = null;
    /**
     * Generated from protobuf field <code>.schema.v2.ApiChanges.ApiSchema api = 2;</code>
     */
    protected $api = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.RequestItem requests = 3;</code>
     */
    private $requests;
    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.RequestItem responses = 4;</code>
     */
    private $responses;
    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.BusinessLogic business_logics = 5;</code>
     */
    private $business_logics;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V2\ProjectSource $project_source
     *     @type \Schema\V2\ApiChanges\ApiSchema $api
     *     @type array<\Schema\V2\ApiChanges\RequestItem>|\Google\Protobuf\Internal\RepeatedField $requests
     *     @type array<\Schema\V2\ApiChanges\RequestItem>|\Google\Protobuf\Internal\RepeatedField $responses
     *     @type array<\Schema\V2\ApiChanges\BusinessLogic>|\Google\Protobuf\Internal\RepeatedField $business_logics
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\ProjectSource::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSource project_source = 1;</code>
     * @return \Schema\V2\ProjectSource|null
     */
    public function getProjectSource()
    {
        return $this->project_source;
    }

    public function hasProjectSource()
    {
        return isset($this->project_source);
    }

    public function clearProjectSource()
    {
        unset($this->project_source);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSource project_source = 1;</code>
     * @param \Schema\V2\ProjectSource $var
     * @return $this
     */
    public function setProjectSource($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\ProjectSource::class);
        $this->project_source = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ApiChanges.ApiSchema api = 2;</code>
     * @return \Schema\V2\ApiChanges\ApiSchema|null
     */
    public function getApi()
    {
        return $this->api;
    }

    public function hasApi()
    {
        return isset($this->api);
    }

    public function clearApi()
    {
        unset($this->api);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ApiChanges.ApiSchema api = 2;</code>
     * @param \Schema\V2\ApiChanges\ApiSchema $var
     * @return $this
     */
    public function setApi($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\ApiChanges\ApiSchema::class);
        $this->api = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.RequestItem requests = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRequests()
    {
        return $this->requests;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.RequestItem requests = 3;</code>
     * @param array<\Schema\V2\ApiChanges\RequestItem>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRequests($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\ApiChanges\RequestItem::class);
        $this->requests = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.RequestItem responses = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getResponses()
    {
        return $this->responses;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.RequestItem responses = 4;</code>
     * @param array<\Schema\V2\ApiChanges\RequestItem>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setResponses($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\ApiChanges\RequestItem::class);
        $this->responses = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.BusinessLogic business_logics = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getBusinessLogics()
    {
        return $this->business_logics;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.ApiChanges.BusinessLogic business_logics = 5;</code>
     * @param array<\Schema\V2\ApiChanges\BusinessLogic>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setBusinessLogics($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\ApiChanges\BusinessLogic::class);
        $this->business_logics = $arr;

        return $this;
    }

}

