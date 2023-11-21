// Copyright (c) Leo RegTech Limited. All rights reserved.

export default {
  action: {
    add: "Add a new action that will be performed when the rule is triggered",
    delete: "Delete the action from the rule",
    label: "Actions to perform",
    name: "Action",
  },
  addChild: "Add child",
  answer: "Answer",
  answerConfig: {
    answerType: "Answer Type",
    answerTypeHelp:
      "Select the format for the answer. E.g. to be one from a fixed list of answers, choose Dropdown",
    attachment: {
      help: "The type of attachment that is required",
      label: "Attachment Format",
      options: {
        attachment: "Attachment in appendix",
        image: "Inline image",
      },
    },
    options: {
      answerNotScored: "Answer is not scored",
      answerNotScoredHelp:
        "Check to mark that the question's score should be ignored for this answer",
      answerOptions: "Answer Options",
      cusRfCon: "Cus Rf/Con",
      displayName: "Display Name",
      displayNameHelp:
        "The answer option that appears when filling in the report",
      rFConcern: "RF/Concern",
      redFlagOrConcernHelp:
        "Does the answer choice raise a red flag, concern or observation",
      reportTextHelp:
        "The report text that appears as the answer in the report",
      scoreHelp: "Enter the score for this answer",
      sourceVariable: "Source for options",
      sourceVariableNone: "Configure the options here",
    },
    table: {
      columnNameHelp: "Enter the name of the column",
      columnType: "Column Type",
      columnTypeHelp: "Select the data type of the column",
      options: "Options",
      optionsHelp: "Add options for the column",
    },
    text: {
      help: "The type of answer to be entered if not free text",
      label: "Answer Format",
      options: {
        additionalContent: "Add Additional Content",
        alphaNumeric: "Alpha-numeric",
        assignedUser: "Assigned User",
        attachment: "Attachment",
        checkbox: "Checkbox",
        date: "Date",
        dropdown: "Dropdown",
        futureDate: "Future Date",
        multiline: "Multiline Text",
        numeric: "Numeric",
        radio: "Radio",
        richText: "Rich Text",
        signature: "Signature",
        table: "Table",
        telephone: "Telephone",
        textField: "Text Field",
      },
    },
  },
  assignedView: "Assigned View",
  cannotDeleteMultiple: [
    "These items cannot be deleted as they are part of one or more rules.",
    "Please review the rules before deleting these items",
  ],
  cannotDeleteSingle: [
    "This item cannot be deleted as it is part of one or more rules.",
    "Please review the rules before deleting this item",
  ],
  changeRequirements: {
    duplicateTemplate:
      "To make any changes you must duplicate the template to a new draft",
    updateStatus: "To make any changes you must update the status to draft",
  },
  clickToEditRule: "Click to edit this rule: {0} => {1}",
  client: "Client",
  clientTemplate: {
    trackRFCs: {
      index:
        "Should the Red Flags, Concerns and Observations tracked by the Remedial Actions feature?",
      track: {
        message: 'Do you want to track "{0}" in the Remedial Actions feature?',
        title: "Track in Remedial Actions Feature",
      },
      untrack: {
        message:
          'Do you want to stop tracking "{0}" in the Remedial Actions feature?',
        title: "Stop tracking in Remedial Actions Feature",
      },
    },
  },
  clientTemplates: "Client templates",
  complianceRiskAssessment: "Compliance risk assessment",
  components: {
    question: "question",
    section: "section",
  },
  concernReportText: "Concern Report Text",
  condition: {
    add: "Add a new condition that will trigger the rule",
    condition: "Condition",
    conditions: "Conditions",
    delete: "Delete the condition from the rule",
    matchAll: "Match all conditions",
    matchAny: "Match any condition",
  },
  configureRegisterMap: "Configure Register Updates",
  configureViews: "Configure Views",
  confirm: {
    deleteRule: "Please confirm that you wish to delete this rule",
  },
  controlName: "Control Name",
  copy: "Copy",
  createDuplicate: "Create Duplicate",
  error: {
    createTemplate: "An internal error occurred creating the new template",
    creatingReport: "There was an error creating the report",
    deleteTemplate: "An internal error occurred deleting the template",
    duplicateTemplate: "An internal error occurred duplicating the template",
    loadDialog: "Failed to load dialog",
    problemLoading: "A problem occurred loading the template",
    sectionSettings: "An internal error occurred updating the section settings",
    unableToCompleteForMode: "Unable to complete action for mode '{0}'",
    unknownAction: "Unknown action for template builder",
    updateTemplate: "An internal error occurred updating the template",
    updateTemplateStatus:
      "An internal error occurred updating the template status",
    updatingReport: "There was an error updating the report",
    updatingReportText: "An internal error occurred updating the report text",
    validation: {
      badlyFormedText: "Badly formed report text",
      emptyLabel: "Label is empty",
      emptyReportText: "Report text is empty",
      invalidToken: "Token is not defined",
      missingScore: "Score missing in scored answer",
      questionNotShown: "Question is missing a rule to make it visible",
      questionNotUsed: "Question is not used in the report",
      sectionEmpty: "Section has no content",
      sectionNotShown: "Section is missing a rule to make it visible",
      tokenNotUsed: "Token is not referenced",
    },
  },
  group: "Group",
  inValidOptionValue: "Invalid option value",
  invalidOption: "Invalid option",
  isHidden: "{0} is shown",
  isShown: "{0} is hidden",
  layout: {
    anySection:
      "Any section or question can be shown or hidden using the rules engine.",
    testTemplate:
      "You can test out the template using the simulate report panel.",
    toBegin: "To begin, add chapters and sections using the lefthand panel.",
    welcome: "Welcome to the Leo Template Editor",
    withSelectedChapter:
      "With a selected chapter or section you can begin to add questions and report text.",
  },
  maximumAllowedScore: "The maximum allowed score is {0}",
  maximumScoreCannotBeLessThan: "Maximum score cannot be less than {0}",
  newSimulation: "New Simulation",
  observationReportText: "Observation Report Text",
  onlyShowNewest: "Only show the newest version of the template",
  operator: "Operator",
  orientation: {
    landscape: "Landscape",
    portrait: "Portrait",
  },
  properties: "Properties",
  propertiesFor: "Properties for {0}",
  question: {
    additionalText: "Additional Text",
    additionalTextHelp:
      "Provide any additional text to clarify how to answer the question",
    answerMap: "Answer Map",
    chapterOnly: "Chapter only?",
    chapterOnlyHelp:
      "Is the user signing against just this chapter, or the whole report?",
    createAndContinue: "Create & Continue",
    createAndContinueHelp:
      "After saving this question, continue and create another question",
    createReportText: "Create report text for the answer",
    createReportTextHelp:
      "Creates a new report text item for the answer at the end of the section",
    customReportText: "Custom Report Text",
    customReportTextHelp:
      "Enter here additional text to give the answer some context.\nThe report answer will be substituted for the token #{{0}}.\nThis custom text can then be used in the report text simply with the original token of #{{1}}",
    doNotDuplicate: "Do Not Duplicate",
    doNotDuplicateHelp:
      "When duplicating a report, do not duplicate the answer to this question.",
    isRequired: "Is Required?",
    isRequiredHelp:
      "Specify if an answer is required to this question before the user can complete the report",
    isScored: "Is Scored?",
    isScoredHelp:
      "Specify if the question has a score. If so you will need to provide a maximum score and scores for each answer",
    isToken: "Is Token?",
    isTokenHelp:
      "The token is used in the report text. The answer to the question is put into the report text in place of the token",
    isVisible: "Is Visible?",
    isVisibleHelp:
      "Is the question visible by default? If it is not, it can be made to appear via a rule",
    maxScore: "Maximum Score",
    maxScoreHelp:
      "The maximum score for this question, no answer can have a score above this value.",
    move: "Move question to {0}",
    moveReportText: "Move report text to {0}",
    noneDefined:
      "No question has been defined for this section. Click the add button to add a new question.",
    question: "Question",
    questionTextHelp: "Type the question or statement to be made here",
    setUpOnCreation: "Set up on Creation?",
    setUpOnCreationHelp:
      "Specify if you want this question to be asked when the report is created.",
    token: "Token",
    tokenHelp:
      "The token name is not shown to the user and is used to reference the answer to this question, we recommend you give it a short descriptive name",
  },
  redFlagOrConcern: "Red flag, Concern or Observation",
  redFlagOrConcernHelp: "The report text that will appears for this {0}",
  redFlagReportText: "Red Flag Report Text",
  redFlagsAndConcerns: "Red flags, concerns and observations",
  registerMap: {
    column: {
      assignedTo: "Assigned user",
      clearMapping: "Clear the mapped field",
      publishedBy: "Publishing user",
      publishedOn: "Date the report is published",
      reportName: "Name of report",
    },
    parameterField: "Map from field in report",
    parameterName: "Map to parameter of invoked rule",
    propertyMap: "Map fields to Properties",
    register: "Register to update",
    rule: "Rule to invoke",
    title: "Register Updates on Publish",
  },
  rule: {
    addRule: "Add a new rule",
    createConcern: "Create concern for {0} - {1}",
    createObservation: "Create observation for {0} - {1}",
    createRedFlag: "Create red flag for {0} - {1}",
    entity: "entity",
    equal: "equals",
    hidden: "Hidden",
    is: "is",
    matchesConditions: "matches {0} conditions",
    name: "Rule Name",
    noActions: "no actions",
    notEqual: "is not equal to",
    numberOfActions: "{0} actions",
    of: "of",
    removeFilter: "Remove filter for {0}",
    setTo: "Set {0} to {1}",
    setToValue: "Set {0} to value of {1}",
    unconditional: "Unconditional",
    undefined: "Undefined",
    unknown: "Unknown",
    visible: "Visible",
  },
  ruleForm: {
    concern: "Create a concern",
    hideControl: "Hide the {0}",
    observation: "Create an observation",
    redFlag: "Create a red flag",
    setValue: "Set the answer for the question",
    setVariableValue: "Set the variable value",
    showControl: "Show the {0}",
  },
  rules: "Rules",
  rulesFor: "Rules for {0}",
  scored: "Scored",
  sectionForm: {
    addSection: "Add Section",
    configureSection: "Configure Section",
    deleteSection: "Delete Section",
    help: {
      contentType:
        "Indicate the type of summary that the section will hold. The report text will be automatically filled in.",
      createAndContinue:
        "After creating this section, continue and create another section",
      doNotDuplicateHelp:
        "When duplicating a report, do not duplicate the answers to the questions in this section.",
      isCloneable:
        "Select if you want the user to be able to create copies of this chapter/section whilst filling in the report. An example is a section to describe a Person of Interest. The user might have several Persons of Interest they want to include, so they would want to create as many copies of the section as they need.",
      isScored:
        "Is the chapter to be scored as part of the report? This will allow scores to be recorded against the answers",
      isVisible:
        "Is the chapter/section visible by default?  If it’s a section that won’t always apply, then make it not visible and create a rule to show it when specific conditions are met.",
      move: "Do you wish to move the section to here or make it a child section?",
      sectionTips:
        "If you have any help text to guide the user in this chapter/section, enter it here",
      title: "Enter the chapter or section title",
    },
    label: {
      assignedUserType: "Assigned User Type",
      cloneableText: "Cloneable Text",
      contentType: "Content Type",
      doNotDuplicate: "Do Not Duplicate",
      isCloneable: "Is Cloneable?",
      sectionTips: "Section Tips",
    },
    move: {
      after: "Move to after {0}",
      before: "Move to before {0}",
      child: "Set as child of {0}",
      to: "Move to - {0}",
    },
    summary: {
      concern: "Concerns Summary",
      executive: "Executive Summary",
      redflag: "Red Flag Summary",
      scoring: "Scoring Summary",
    },
  },
  sectionList: {
    addChapterOrSection: "Add a new Chapter or Section",
    addParagraph: "Add a new paragraph into the report text",
    addQuestion: "Add a new question",
    clickEditQuestion:
      "Click to edit the question or drag to reorder and add to report text.",
    clickEditReportText: "Click to edit the report text or drag to reorder",
    moveSection: "Move Section",
    moveToSection: "Move to Section",
    noReportTextDefined:
      "No report text has been defined for this section. Click the add button for manual text or drag a question down to include its output.",
    questionsAndAnswers: "Questions and Answers",
    selectQuestions: "Select multiple questions",
    selectReportText: "Select multiple report text",
  },
  showRules: "Show rules",
  stat: {
    archived: "Archived",
    draft: "Draft",
    released: "Released",
    test: "Test",
    unused: "Unused",
  },
  template: {
    delete: "Delete Template",
    duplicate: "Duplicate Template",
    name: "Template name",
    new: "New Template",
    uneditableDueToStatus:
      "This template is in '{0}' status and cannot be edited.",
    update: "Update Template",
  },
  templateForm: {
    copyTemplate: "Copy the template and retain the version history",
    createTemplate: "Create a new template without the version history",
    help: {
      hasProgram:
        "Indicates if the template is linked to a compliance risk assessment. This setting cannot be changed after creating the template.",
      orientation:
        "Select how the page will be orientated whe creating a PDF for a report",
      retainCorrelation:
        "Indicates if this template link back to the previous version",
      submitAction:
        "Indicates the result of submitting a report built from the template. Reports can be automatically published or require reviewing after being submitted.",
      templateName: "The name of the template shown to the users",
      versionNumber: "A distinct version number for the template",
    },
    label: {
      confidential: "Confidential",
      executiveSummary: "Create Executive Summary?",
      hasReportCover: "Show report cover?",
      hasTableContents: "Show table of contents?",
      mirrorRedFlagsConcerns: "Mirror Text to RF/Concern",
      moduleName: "Module to assign the template to",
      orientation: "Page Orientation",
      reportingOptions: "Reporting Options",
      scoredReport: "Scored Report",
      submitAction: "Action when submitting report",
      templateOptions: "Template Options",
      templateStatus: "Template Status",
      versionNumber: "Version Number",
    },
    options: {
      publish: "Automatically publish report without review",
      review: "Requires review before publishing",
      reviewConcerns: "Review required if any concerns or red flags are raised",
      reviewRedFlags: "Review required only when red flags are raised",
    },
    uniqueName: "Name must be unique",
    versionNumCannotDecrease: "Cannot decrease version number",
    versionNumDecimal: "Version number must be decimal separated integers",
  },
  templates: "Templates",
  token: {
    isNotUnique: "Token is not unique for the template",
    missing: "A token is missing from the custom report text",
    notClosed: "Token expression is not closed",
    reportCannotRef: "Report text cannot reference the answer's token.",
  },
  trigger: {
    add: "Add a new trigger to the rule",
    delete: "Delete the trigger from the rule",
    trigger: "Trigger",
  },
  unknownAction: "Unknown action for template builder : {0}",
  unknownContent: 'Unknown content of type "{0}"',
  updateStatus: "Update Status",
  updateStatusOf: "Update Status of {0}",
  valueIsNotNumber: "Value is not a number",
  variable: "Variable",
  variableContent: {
    addVariable: "Add User Variable",
    answerToken: "Answer token",
    defaultValue: "Default value for the variable",
    isLockedLabel:
      "The variable is locked and its name can only be changed via the associated answer",
    orphaned: "Orphaned",
    orphanedFlag: "Orphaned reference",
    questions: "Questions",
    sections: "Sections",
    tokenName: "Token Name",
    userDefinedFlag: "User defined variable",
    userVariable: "User variable",
    variableName: "Variable Name",
    variableType: "Variable Type",
  },
  variables: "Variables",
  viewInfo: {
    reportDesigner: "Report Designer",
    rules: "Rules",
    simulateReport: "Simulate Report",
    variables: "Variables",
  },
};
