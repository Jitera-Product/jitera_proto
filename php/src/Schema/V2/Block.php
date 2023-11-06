<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/block.proto

namespace Schema\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.Block</code>
 */
class Block extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string node_id = 2;</code>
     */
    protected $node_id = '';
    /**
     * Generated from protobuf field <code>string parent_node_id = 3;</code>
     */
    protected $parent_node_id = '';
    /**
     * Generated from protobuf field <code>string page_node_id = 4;</code>
     */
    protected $page_node_id = '';
    /**
     * Generated from protobuf field <code>string block_type = 5;</code>
     */
    protected $block_type = '';
    /**
     * Generated from protobuf field <code>string name = 6;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>int32 project_id = 7;</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>.schema.v2.Block.Property properties = 8;</code>
     */
    protected $properties = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block.Content content = 9;</code>
     */
    private $content;
    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block children = 10;</code>
     */
    private $children;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $node_id
     *     @type string $parent_node_id
     *     @type string $page_node_id
     *     @type string $block_type
     *     @type string $name
     *     @type int $project_id
     *     @type \Schema\V2\Block\Property $properties
     *     @type array<\Schema\V2\Block\Content>|\Google\Protobuf\Internal\RepeatedField $content
     *     @type array<\Schema\V2\Block>|\Google\Protobuf\Internal\RepeatedField $children
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\Block::initOnce();
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
     * Generated from protobuf field <code>string node_id = 2;</code>
     * @return string
     */
    public function getNodeId()
    {
        return $this->node_id;
    }

    /**
     * Generated from protobuf field <code>string node_id = 2;</code>
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
     * Generated from protobuf field <code>string parent_node_id = 3;</code>
     * @return string
     */
    public function getParentNodeId()
    {
        return $this->parent_node_id;
    }

    /**
     * Generated from protobuf field <code>string parent_node_id = 3;</code>
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
     * Generated from protobuf field <code>string page_node_id = 4;</code>
     * @return string
     */
    public function getPageNodeId()
    {
        return $this->page_node_id;
    }

    /**
     * Generated from protobuf field <code>string page_node_id = 4;</code>
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
     * Generated from protobuf field <code>string block_type = 5;</code>
     * @return string
     */
    public function getBlockType()
    {
        return $this->block_type;
    }

    /**
     * Generated from protobuf field <code>string block_type = 5;</code>
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
     * Generated from protobuf field <code>string name = 6;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 6;</code>
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
     * Generated from protobuf field <code>int32 project_id = 7;</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 7;</code>
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
     * Generated from protobuf field <code>.schema.v2.Block.Property properties = 8;</code>
     * @return \Schema\V2\Block\Property|null
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
     * Generated from protobuf field <code>.schema.v2.Block.Property properties = 8;</code>
     * @param \Schema\V2\Block\Property $var
     * @return $this
     */
    public function setProperties($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\Block\Property::class);
        $this->properties = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block.Content content = 9;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block.Content content = 9;</code>
     * @param array<\Schema\V2\Block\Content>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setContent($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\Block\Content::class);
        $this->content = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block children = 10;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block children = 10;</code>
     * @param array<\Schema\V2\Block>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setChildren($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\Block::class);
        $this->children = $arr;

        return $this;
    }

}

