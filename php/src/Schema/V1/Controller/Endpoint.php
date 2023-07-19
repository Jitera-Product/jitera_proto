<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Controller;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Controller.Endpoint</code>
 */
class Endpoint extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string path = 1;</code>
     */
    protected $path = '';
    /**
     * Generated from protobuf field <code>string name = 2;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Authentication authentication = 10;</code>
     */
    protected $authentication = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Authorization authorization = 11;</code>
     */
    protected $authorization = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Response responses = 12;</code>
     */
    protected $responses = null;
    /**
     * Generated from protobuf field <code>.schema.v1.Controller.RequestContent params = 13;</code>
     */
    protected $params = null;
    /**
     * Generated from protobuf field <code>bool writable = 14;</code>
     */
    protected $writable = false;
    /**
     * Generated from protobuf field <code>optional string feature_action = 15;</code>
     */
    protected $feature_action = null;
    /**
     * Generated from protobuf field <code>optional string feature_table = 16;</code>
     */
    protected $feature_table = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.AuthorizationGroup authorization_groups = 17;</code>
     */
    private $authorization_groups;
    /**
     * Generated from protobuf field <code>bool restrict_access = 18;</code>
     */
    protected $restrict_access = false;
    protected $resource;
    protected $methods;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $path
     *     @type string $name
     *     @type string $table
     *     @type int $feature
     *     @type \Schema\V1\Controller\Endpoint\PBList $list
     *     @type \Schema\V1\Controller\Endpoint\Get $get
     *     @type \Schema\V1\Controller\Endpoint\Create $create
     *     @type \Schema\V1\Controller\Endpoint\Update $update
     *     @type \Schema\V1\Controller\Endpoint\Delete $delete
     *     @type \Schema\V1\Controller\Authentication $authentication
     *     @type \Schema\V1\Controller\Authorization $authorization
     *     @type \Schema\V1\Controller\Response $responses
     *     @type \Schema\V1\Controller\RequestContent $params
     *     @type bool $writable
     *     @type string $feature_action
     *     @type string $feature_table
     *     @type array<\Schema\V1\Controller\AuthorizationGroup>|\Google\Protobuf\Internal\RepeatedField $authorization_groups
     *     @type bool $restrict_access
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string path = 1;</code>
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Generated from protobuf field <code>string path = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setPath($var)
    {
        GPBUtil::checkString($var, True);
        $this->path = $var;

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
     * Generated from protobuf field <code>string table = 3;</code>
     * @return string
     */
    public function getTable()
    {
        return $this->readOneof(3);
    }

    public function hasTable()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>string table = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setTable($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Feature.FeatureName feature = 4;</code>
     * @return int
     */
    public function getFeature()
    {
        return $this->readOneof(4);
    }

    public function hasFeature()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Feature.FeatureName feature = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setFeature($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Feature\FeatureName::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.List list = 5;</code>
     * @return \Schema\V1\Controller\Endpoint\PBList|null
     */
    public function getList()
    {
        return $this->readOneof(5);
    }

    public function hasList()
    {
        return $this->hasOneof(5);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.List list = 5;</code>
     * @param \Schema\V1\Controller\Endpoint\PBList $var
     * @return $this
     */
    public function setList($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Endpoint\PBList::class);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Get get = 6;</code>
     * @return \Schema\V1\Controller\Endpoint\Get|null
     */
    public function getGet()
    {
        return $this->readOneof(6);
    }

    public function hasGet()
    {
        return $this->hasOneof(6);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Get get = 6;</code>
     * @param \Schema\V1\Controller\Endpoint\Get $var
     * @return $this
     */
    public function setGet($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Endpoint\Get::class);
        $this->writeOneof(6, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Create create = 7;</code>
     * @return \Schema\V1\Controller\Endpoint\Create|null
     */
    public function getCreate()
    {
        return $this->readOneof(7);
    }

    public function hasCreate()
    {
        return $this->hasOneof(7);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Create create = 7;</code>
     * @param \Schema\V1\Controller\Endpoint\Create $var
     * @return $this
     */
    public function setCreate($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Endpoint\Create::class);
        $this->writeOneof(7, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Update update = 8;</code>
     * @return \Schema\V1\Controller\Endpoint\Update|null
     */
    public function getUpdate()
    {
        return $this->readOneof(8);
    }

    public function hasUpdate()
    {
        return $this->hasOneof(8);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Update update = 8;</code>
     * @param \Schema\V1\Controller\Endpoint\Update $var
     * @return $this
     */
    public function setUpdate($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Endpoint\Update::class);
        $this->writeOneof(8, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Delete delete = 9;</code>
     * @return \Schema\V1\Controller\Endpoint\Delete|null
     */
    public function getDelete()
    {
        return $this->readOneof(9);
    }

    public function hasDelete()
    {
        return $this->hasOneof(9);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Endpoint.Delete delete = 9;</code>
     * @param \Schema\V1\Controller\Endpoint\Delete $var
     * @return $this
     */
    public function setDelete($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Endpoint\Delete::class);
        $this->writeOneof(9, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Authentication authentication = 10;</code>
     * @return \Schema\V1\Controller\Authentication|null
     */
    public function getAuthentication()
    {
        return $this->authentication;
    }

    public function hasAuthentication()
    {
        return isset($this->authentication);
    }

    public function clearAuthentication()
    {
        unset($this->authentication);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Authentication authentication = 10;</code>
     * @param \Schema\V1\Controller\Authentication $var
     * @return $this
     */
    public function setAuthentication($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Authentication::class);
        $this->authentication = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Authorization authorization = 11;</code>
     * @return \Schema\V1\Controller\Authorization|null
     */
    public function getAuthorization()
    {
        return $this->authorization;
    }

    public function hasAuthorization()
    {
        return isset($this->authorization);
    }

    public function clearAuthorization()
    {
        unset($this->authorization);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Authorization authorization = 11;</code>
     * @param \Schema\V1\Controller\Authorization $var
     * @return $this
     */
    public function setAuthorization($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Authorization::class);
        $this->authorization = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Response responses = 12;</code>
     * @return \Schema\V1\Controller\Response|null
     */
    public function getResponses()
    {
        return $this->responses;
    }

    public function hasResponses()
    {
        return isset($this->responses);
    }

    public function clearResponses()
    {
        unset($this->responses);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.Response responses = 12;</code>
     * @param \Schema\V1\Controller\Response $var
     * @return $this
     */
    public function setResponses($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\Response::class);
        $this->responses = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.RequestContent params = 13;</code>
     * @return \Schema\V1\Controller\RequestContent|null
     */
    public function getParams()
    {
        return $this->params;
    }

    public function hasParams()
    {
        return isset($this->params);
    }

    public function clearParams()
    {
        unset($this->params);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Controller.RequestContent params = 13;</code>
     * @param \Schema\V1\Controller\RequestContent $var
     * @return $this
     */
    public function setParams($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Controller\RequestContent::class);
        $this->params = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool writable = 14;</code>
     * @return bool
     */
    public function getWritable()
    {
        return $this->writable;
    }

    /**
     * Generated from protobuf field <code>bool writable = 14;</code>
     * @param bool $var
     * @return $this
     */
    public function setWritable($var)
    {
        GPBUtil::checkBool($var);
        $this->writable = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string feature_action = 15;</code>
     * @return string
     */
    public function getFeatureAction()
    {
        return isset($this->feature_action) ? $this->feature_action : '';
    }

    public function hasFeatureAction()
    {
        return isset($this->feature_action);
    }

    public function clearFeatureAction()
    {
        unset($this->feature_action);
    }

    /**
     * Generated from protobuf field <code>optional string feature_action = 15;</code>
     * @param string $var
     * @return $this
     */
    public function setFeatureAction($var)
    {
        GPBUtil::checkString($var, True);
        $this->feature_action = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string feature_table = 16;</code>
     * @return string
     */
    public function getFeatureTable()
    {
        return isset($this->feature_table) ? $this->feature_table : '';
    }

    public function hasFeatureTable()
    {
        return isset($this->feature_table);
    }

    public function clearFeatureTable()
    {
        unset($this->feature_table);
    }

    /**
     * Generated from protobuf field <code>optional string feature_table = 16;</code>
     * @param string $var
     * @return $this
     */
    public function setFeatureTable($var)
    {
        GPBUtil::checkString($var, True);
        $this->feature_table = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.AuthorizationGroup authorization_groups = 17;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAuthorizationGroups()
    {
        return $this->authorization_groups;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Controller.AuthorizationGroup authorization_groups = 17;</code>
     * @param array<\Schema\V1\Controller\AuthorizationGroup>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAuthorizationGroups($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Controller\AuthorizationGroup::class);
        $this->authorization_groups = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool restrict_access = 18;</code>
     * @return bool
     */
    public function getRestrictAccess()
    {
        return $this->restrict_access;
    }

    /**
     * Generated from protobuf field <code>bool restrict_access = 18;</code>
     * @param bool $var
     * @return $this
     */
    public function setRestrictAccess($var)
    {
        GPBUtil::checkBool($var);
        $this->restrict_access = $var;

        return $this;
    }

    /**
     * @return string
     */
    public function getResource()
    {
        return $this->whichOneof("resource");
    }

    /**
     * @return string
     */
    public function getMethods()
    {
        return $this->whichOneof("methods");
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Endpoint::class, \Schema\V1\Controller_Endpoint::class);

