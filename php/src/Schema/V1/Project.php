<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Project</code>
 */
class Project extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1;</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string project_name = 2;</code>
     */
    protected $project_name = '';
    /**
     * Generated from protobuf field <code>int32 project_id = 3;</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>optional .schema.v1.Infra infra = 4;</code>
     */
    protected $infra = null;
    /**
     * Generated from protobuf field <code>string time_zone = 5;</code>
     */
    protected $time_zone = '';
    /**
     * Generated from protobuf field <code>string default_language_code = 6;</code>
     */
    protected $default_language_code = '';
    /**
     * Generated from protobuf field <code>repeated string language_codes = 7;</code>
     */
    private $language_codes;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Project.Credential credentials = 12;</code>
     */
    private $credentials;
    /**
     * Generated from protobuf field <code>string event_type = 13;</code>
     */
    protected $event_type = '';
    /**
     * Generated from protobuf field <code>.schema.v1.PreviewUrls preview_urls = 14;</code>
     */
    protected $preview_urls = null;
    protected $generate_type;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $project_name
     *     @type int $project_id
     *     @type \Schema\V1\Infra $infra
     *     @type string $time_zone
     *     @type string $default_language_code
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $language_codes
     *     @type array<\Schema\V1\Project\Credential>|\Google\Protobuf\Internal\RepeatedField $credentials
     *     @type string $event_type
     *     @type \Schema\V1\PreviewUrls $preview_urls
     *     @type \Schema\V1\ProjectExport $project_export
     *     @type \Schema\V1\ProjectPreview $project_preview
     *     @type \Schema\V1\CodePreview $code_preview
     *     @type \Schema\V1\Placeholder $placeholder
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1;</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string project_name = 2;</code>
     * @return string
     */
    public function getProjectName()
    {
        return $this->project_name;
    }

    /**
     * Generated from protobuf field <code>string project_name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setProjectName($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 3;</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 3;</code>
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
     * Generated from protobuf field <code>optional .schema.v1.Infra infra = 4;</code>
     * @return \Schema\V1\Infra|null
     */
    public function getInfra()
    {
        return $this->infra;
    }

    public function hasInfra()
    {
        return isset($this->infra);
    }

    public function clearInfra()
    {
        unset($this->infra);
    }

    /**
     * Generated from protobuf field <code>optional .schema.v1.Infra infra = 4;</code>
     * @param \Schema\V1\Infra $var
     * @return $this
     */
    public function setInfra($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Infra::class);
        $this->infra = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string time_zone = 5;</code>
     * @return string
     */
    public function getTimeZone()
    {
        return $this->time_zone;
    }

    /**
     * Generated from protobuf field <code>string time_zone = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setTimeZone($var)
    {
        GPBUtil::checkString($var, True);
        $this->time_zone = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string default_language_code = 6;</code>
     * @return string
     */
    public function getDefaultLanguageCode()
    {
        return $this->default_language_code;
    }

    /**
     * Generated from protobuf field <code>string default_language_code = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setDefaultLanguageCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->default_language_code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string language_codes = 7;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLanguageCodes()
    {
        return $this->language_codes;
    }

    /**
     * Generated from protobuf field <code>repeated string language_codes = 7;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLanguageCodes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->language_codes = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Project.Credential credentials = 12;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCredentials()
    {
        return $this->credentials;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Project.Credential credentials = 12;</code>
     * @param array<\Schema\V1\Project\Credential>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCredentials($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Project\Credential::class);
        $this->credentials = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string event_type = 13;</code>
     * @return string
     */
    public function getEventType()
    {
        return $this->event_type;
    }

    /**
     * Generated from protobuf field <code>string event_type = 13;</code>
     * @param string $var
     * @return $this
     */
    public function setEventType($var)
    {
        GPBUtil::checkString($var, True);
        $this->event_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.PreviewUrls preview_urls = 14;</code>
     * @return \Schema\V1\PreviewUrls|null
     */
    public function getPreviewUrls()
    {
        return $this->preview_urls;
    }

    public function hasPreviewUrls()
    {
        return isset($this->preview_urls);
    }

    public function clearPreviewUrls()
    {
        unset($this->preview_urls);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.PreviewUrls preview_urls = 14;</code>
     * @param \Schema\V1\PreviewUrls $var
     * @return $this
     */
    public function setPreviewUrls($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\PreviewUrls::class);
        $this->preview_urls = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ProjectExport project_export = 9;</code>
     * @return \Schema\V1\ProjectExport|null
     */
    public function getProjectExport()
    {
        return $this->readOneof(9);
    }

    public function hasProjectExport()
    {
        return $this->hasOneof(9);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ProjectExport project_export = 9;</code>
     * @param \Schema\V1\ProjectExport $var
     * @return $this
     */
    public function setProjectExport($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ProjectExport::class);
        $this->writeOneof(9, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ProjectPreview project_preview = 10;</code>
     * @return \Schema\V1\ProjectPreview|null
     */
    public function getProjectPreview()
    {
        return $this->readOneof(10);
    }

    public function hasProjectPreview()
    {
        return $this->hasOneof(10);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ProjectPreview project_preview = 10;</code>
     * @param \Schema\V1\ProjectPreview $var
     * @return $this
     */
    public function setProjectPreview($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ProjectPreview::class);
        $this->writeOneof(10, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CodePreview code_preview = 11;</code>
     * @return \Schema\V1\CodePreview|null
     */
    public function getCodePreview()
    {
        return $this->readOneof(11);
    }

    public function hasCodePreview()
    {
        return $this->hasOneof(11);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CodePreview code_preview = 11;</code>
     * @param \Schema\V1\CodePreview $var
     * @return $this
     */
    public function setCodePreview($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CodePreview::class);
        $this->writeOneof(11, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Placeholder placeholder = 15;</code>
     * @return \Schema\V1\Placeholder|null
     */
    public function getPlaceholder()
    {
        return $this->readOneof(15);
    }

    public function hasPlaceholder()
    {
        return $this->hasOneof(15);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Placeholder placeholder = 15;</code>
     * @param \Schema\V1\Placeholder $var
     * @return $this
     */
    public function setPlaceholder($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Placeholder::class);
        $this->writeOneof(15, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getGenerateType()
    {
        return $this->whichOneof("generate_type");
    }

}

