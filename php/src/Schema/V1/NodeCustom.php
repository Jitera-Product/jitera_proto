<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.NodeCustom</code>
 */
class NodeCustom extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional bool use_prop_style = 1;</code>
     */
    protected $use_prop_style = null;
    /**
     * Generated from protobuf field <code>optional bool ignore_prop_style = 2;</code>
     */
    protected $ignore_prop_style = null;
    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference form = 3;</code>
     */
    protected $form = null;
    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference molecule = 4;</code>
     */
    protected $molecule = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeMediaQuery media_queries = 5;</code>
     */
    private $media_queries;
    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference authentication = 6;</code>
     */
    protected $authentication = null;
    /**
     * Generated from protobuf field <code>optional .schema.v1.RenderCondition render_condition = 7;</code>
     */
    protected $render_condition = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable seo_title = 8;</code>
     */
    private $seo_title;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable seo_description = 9;</code>
     */
    private $seo_description;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction actions = 10;</code>
     */
    private $actions;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeParam params = 11;</code>
     */
    private $params;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeParam props = 12;</code>
     */
    private $props;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable children_data = 13;</code>
     */
    private $children_data;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.FormValidation form_validations = 14;</code>
     */
    private $form_validations;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.FormDefaultValue form_default_values = 15;</code>
     */
    private $form_default_values;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $use_prop_style
     *     @type bool $ignore_prop_style
     *     @type \Schema\V1\NodeReference $form
     *     @type \Schema\V1\NodeReference $molecule
     *     @type array<\Schema\V1\NodeMediaQuery>|\Google\Protobuf\Internal\RepeatedField $media_queries
     *     @type \Schema\V1\NodeReference $authentication
     *     @type \Schema\V1\RenderCondition $render_condition
     *     @type array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $seo_title
     *     @type array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $seo_description
     *     @type array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $actions
     *     @type array<\Schema\V1\NodeParam>|\Google\Protobuf\Internal\RepeatedField $params
     *     @type array<\Schema\V1\NodeParam>|\Google\Protobuf\Internal\RepeatedField $props
     *     @type array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $children_data
     *     @type array<\Schema\V1\FormValidation>|\Google\Protobuf\Internal\RepeatedField $form_validations
     *     @type array<\Schema\V1\FormDefaultValue>|\Google\Protobuf\Internal\RepeatedField $form_default_values
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional bool use_prop_style = 1;</code>
     * @return bool
     */
    public function getUsePropStyle()
    {
        return isset($this->use_prop_style) ? $this->use_prop_style : false;
    }

    public function hasUsePropStyle()
    {
        return isset($this->use_prop_style);
    }

    public function clearUsePropStyle()
    {
        unset($this->use_prop_style);
    }

    /**
     * Generated from protobuf field <code>optional bool use_prop_style = 1;</code>
     * @param bool $var
     * @return $this
     */
    public function setUsePropStyle($var)
    {
        GPBUtil::checkBool($var);
        $this->use_prop_style = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool ignore_prop_style = 2;</code>
     * @return bool
     */
    public function getIgnorePropStyle()
    {
        return isset($this->ignore_prop_style) ? $this->ignore_prop_style : false;
    }

    public function hasIgnorePropStyle()
    {
        return isset($this->ignore_prop_style);
    }

    public function clearIgnorePropStyle()
    {
        unset($this->ignore_prop_style);
    }

    /**
     * Generated from protobuf field <code>optional bool ignore_prop_style = 2;</code>
     * @param bool $var
     * @return $this
     */
    public function setIgnorePropStyle($var)
    {
        GPBUtil::checkBool($var);
        $this->ignore_prop_style = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference form = 3;</code>
     * @return \Schema\V1\NodeReference|null
     */
    public function getForm()
    {
        return $this->form;
    }

    public function hasForm()
    {
        return isset($this->form);
    }

    public function clearForm()
    {
        unset($this->form);
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference form = 3;</code>
     * @param \Schema\V1\NodeReference $var
     * @return $this
     */
    public function setForm($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\NodeReference::class);
        $this->form = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference molecule = 4;</code>
     * @return \Schema\V1\NodeReference|null
     */
    public function getMolecule()
    {
        return $this->molecule;
    }

    public function hasMolecule()
    {
        return isset($this->molecule);
    }

    public function clearMolecule()
    {
        unset($this->molecule);
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference molecule = 4;</code>
     * @param \Schema\V1\NodeReference $var
     * @return $this
     */
    public function setMolecule($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\NodeReference::class);
        $this->molecule = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeMediaQuery media_queries = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getMediaQueries()
    {
        return $this->media_queries;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeMediaQuery media_queries = 5;</code>
     * @param array<\Schema\V1\NodeMediaQuery>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setMediaQueries($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeMediaQuery::class);
        $this->media_queries = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.NodeReference authentication = 6;</code>
     * @return \Schema\V1\NodeReference|null
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
     * Generated from protobuf field <code>optional .schema.v1.NodeReference authentication = 6;</code>
     * @param \Schema\V1\NodeReference $var
     * @return $this
     */
    public function setAuthentication($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\NodeReference::class);
        $this->authentication = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.RenderCondition render_condition = 7;</code>
     * @return \Schema\V1\RenderCondition|null
     */
    public function getRenderCondition()
    {
        return $this->render_condition;
    }

    public function hasRenderCondition()
    {
        return isset($this->render_condition);
    }

    public function clearRenderCondition()
    {
        unset($this->render_condition);
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.RenderCondition render_condition = 7;</code>
     * @param \Schema\V1\RenderCondition $var
     * @return $this
     */
    public function setRenderCondition($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\RenderCondition::class);
        $this->render_condition = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable seo_title = 8;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSeoTitle()
    {
        return $this->seo_title;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable seo_title = 8;</code>
     * @param array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSeoTitle($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeVariable::class);
        $this->seo_title = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable seo_description = 9;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSeoDescription()
    {
        return $this->seo_description;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable seo_description = 9;</code>
     * @param array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSeoDescription($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeVariable::class);
        $this->seo_description = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction actions = 10;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getActions()
    {
        return $this->actions;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction actions = 10;</code>
     * @param array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setActions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeAction::class);
        $this->actions = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeParam params = 11;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeParam params = 11;</code>
     * @param array<\Schema\V1\NodeParam>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setParams($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeParam::class);
        $this->params = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeParam props = 12;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProps()
    {
        return $this->props;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeParam props = 12;</code>
     * @param array<\Schema\V1\NodeParam>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProps($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeParam::class);
        $this->props = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable children_data = 13;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getChildrenData()
    {
        return $this->children_data;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable children_data = 13;</code>
     * @param array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setChildrenData($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeVariable::class);
        $this->children_data = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.FormValidation form_validations = 14;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getFormValidations()
    {
        return $this->form_validations;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.FormValidation form_validations = 14;</code>
     * @param array<\Schema\V1\FormValidation>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setFormValidations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\FormValidation::class);
        $this->form_validations = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.FormDefaultValue form_default_values = 15;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getFormDefaultValues()
    {
        return $this->form_default_values;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.FormDefaultValue form_default_values = 15;</code>
     * @param array<\Schema\V1\FormDefaultValue>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setFormDefaultValues($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\FormDefaultValue::class);
        $this->form_default_values = $arr;

        return $this;
    }

}

