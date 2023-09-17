<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/business_logic.proto

namespace Schema\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.BusinessLogic</code>
 */
class BusinessLogic extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string node_id = 1;</code>
     */
    protected $node_id = '';
    /**
     * Generated from protobuf field <code>string parent_node_id = 2;</code>
     */
    protected $parent_node_id = '';
    /**
     * Generated from protobuf field <code>string page_node_id = 3;</code>
     */
    protected $page_node_id = '';
    /**
     * Generated from protobuf field <code>string block_type = 4;</code>
     */
    protected $block_type = '';
    /**
     * Generated from protobuf field <code>string name = 5;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>repeated .schema.v2.BusinessLogic.Content content = 6;</code>
     */
    private $content;
    /**
     * Generated from protobuf field <code>.schema.v2.BusinessLogic.Property properties = 7;</code>
     */
    protected $properties = null;
    /**
     * Generated from protobuf field <code>int32 project_id = 8;</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>repeated string children = 9;</code>
     */
    private $children;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $node_id
     *     @type string $parent_node_id
     *     @type string $page_node_id
     *     @type string $block_type
     *     @type string $name
     *     @type array<\Schema\V2\BusinessLogic\Content>|\Google\Protobuf\Internal\RepeatedField $content
     *     @type \Schema\V2\BusinessLogic\Property $properties
     *     @type int $project_id
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $children
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\BusinessLogic::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string node_id = 1;</code>
     * @return string
     */
    public function getNodeId()
    {
        return $this->node_id;
    }

    /**
     * Generated from protobuf field <code>string node_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setNodeId($var)
    {
        GPBUtil::checkString($var, True);
        $this->node_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string parent_node_id = 2;</code>
     * @return string
     */
    public function getParentNodeId()
    {
        return $this->parent_node_id;
    }

    /**
     * Generated from protobuf field <code>string parent_node_id = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setParentNodeId($var)
    {
        GPBUtil::checkString($var, True);
        $this->parent_node_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string page_node_id = 3;</code>
     * @return string
     */
    public function getPageNodeId()
    {
        return $this->page_node_id;
    }

    /**
     * Generated from protobuf field <code>string page_node_id = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setPageNodeId($var)
    {
        GPBUtil::checkString($var, True);
        $this->page_node_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string block_type = 4;</code>
     * @return string
     */
    public function getBlockType()
    {
        return $this->block_type;
    }

    /**
     * Generated from protobuf field <code>string block_type = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setBlockType($var)
    {
        GPBUtil::checkString($var, True);
        $this->block_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 5;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 5;</code>
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
     * Generated from protobuf field <code>repeated .schema.v2.BusinessLogic.Content content = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.BusinessLogic.Content content = 6;</code>
     * @param array<\Schema\V2\BusinessLogic\Content>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setContent($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\BusinessLogic\Content::class);
        $this->content = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BusinessLogic.Property properties = 7;</code>
     * @return \Schema\V2\BusinessLogic\Property|null
     */
    public function getProperties()
    {
        return $this->properties;
    }

    public function hasProperties()
    {
        return isset($this->properties);
    }

    public function clearProperties()
    {
        unset($this->properties);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BusinessLogic.Property properties = 7;</code>
     * @param \Schema\V2\BusinessLogic\Property $var
     * @return $this
     */
    public function setProperties($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\BusinessLogic\Property::class);
        $this->properties = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 8;</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 8;</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkInt32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string children = 9;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Generated from protobuf field <code>repeated string children = 9;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setChildren($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->children = $arr;

        return $this;
    }

}

