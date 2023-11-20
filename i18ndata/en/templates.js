// Copyright (c) Leo RegTech Limited. All rights reserved.

export default {
  //templateBuilder
  action: {
    add: "Add a new action that will be performed when the rule is triggered",
    delete: "Delete the action from the rule",
    name: "Action",
    label: "Actions to perform",
  },
  addChild: "Add child",
  answer: "Answer",
  answerConfig: {
    answerType: "Answer Type",
    answerTypeHelp:
      "Select the format for the answer. E.g. to be one from a fixed list of answers, choose Dropdown",
    attachment: {
      label: "Attachment Format",
      help: "The type of attachment that is required",
      options: {
        image: "Inline image",
        attachment: "Attachment in appendix",
      },
    },
    table: {
      columnType: "Column Type",
      columnTypeHelp: "Select the data type of the column",
      columnNameHelp: "Enter the name of the column",
      options: "Options",
      optionsHelp: "Add options for the column",
    },
    text: {
      label: "Answer Format",
      help: "The type of answer to be entered if not free text",
      options: {
        multiline: "Multiline Text",
        numeric: "Numeric",
        alphaNumeric: "Alpha-numeric",
        telephone: "Telephone",
        date: "Date",
        futureDate: "Future Date",
        dropdown: "Dropdown",
        radio: "Radio", //"Radio" as in "radio buttons"
        attachment: "Attachment",
        checkbox: "Checkbox",
        table: "Table",
        assignedUser: "Assigned User",
        textField: "Text Field",
        richText: "Rich Text",
        additionalContent: "Add Additional Content",
        signature: "Signature",
      },
    },
    options: {
      sourceVariable: "Source for options",
      sourceVariableNone: "Configure the options here",
      answerOptions: "Answer Options",
      answerNotScored: "Answer is not scored",
      answerNotScoredHelp:
        "Check to mark that the question's score should be ignored for this answer",
      displayName: "Display Name",
      displayNameHelp:
        "The answer option that appears when filling in the report",
      scoreHelp: "Enter the score for this answer",
      rFConcern: "RF/Concern",
      cusRfCon: "Cus Rf/Con",
      reportTextHelp:
        "The report text that appears as the answer in the report",
      redFlagOrConcernHelp:
        "Does the answer choice raise a red flag, concern or observation",
    },
  },
  assignedView: "Assigned View",
  changeRequirements: {
    duplicateTemplate:
      "To make any changes you must duplicate the template to a new draft",
    updateStatus: "To make any changes you must update the status to draft",
  },
  client: "Client",
  clientTemplates: "Client templates",
  clientTemplate: {
    trackRFCs: {
      index:
        "Should the Red Flags, Concerns and Observations tracked by the Remedial Actions feature?",
      track: {
        title: "Track in Remedial Actions Feature",
        message: 'Do you want to track "{0}" in the Remedial Actions feature?',
      },
      untrack: {
        title: "Stop tracking in Remedial Actions Feature",
        message:
          'Do you want to stop tracking "{0}" in the Remedial Actions feature?',
      },
    },
  },
  copy: "Copy",
  complianceRiskAssessment: "Compliance risk assessment",
  condition: {
    condition: "Condition",
    conditions: "Conditions",
    add: "Add a new condition that will trigger the rule",
    delete: "Delete the condition from the rule",
    matchAll: "Match all conditions",
    matchAny: "Match any condition",
  },
  confirm: {
    deleteRule: "Please confirm that you wish to delete this rule",
  },
  components: {
    question: "question",
    section: "section",
  },
  configureViews: "Configure Views",
  configureRegisterMap: "Configure Register Updates",
  cannotDeleteMultiple: [
    "These items cannot be deleted as they are part of one or more rules.",
    "Please review the rules before deleting these items",
  ],
  cannotDeleteSingle: [
    "This item cannot be deleted as it is part of one or more rules.",
    "Please review the rules before deleting this item",
  ],
  controlName: "Control Name",
  createDuplicate: "Create Duplicate",
  error: {
    problemLoading: "A problem occurred loading the template",
    unknownAction: "Unknown action for template builder",
    creatingReport: "There was an error creating the report",
    updatingReport: "There was an error updating the report",
    loadDialog: "Failed to load dialog",
    sectionSettings: "An internal error occurred updating the section settings",
    updatingReportText: "An internal error occurred updating the report text",
    duplicateTemplate: "An internal error occurred duplicating the template",
    unableToCompleteForMode: "Unable to complete action for mode '{0}'",
    createTemplate: "An internal error occurred creating the new template",
    deleteTemplate: "An internal error occurred deleting the template",
    updateTemplateStatus:
      "An internal error occurred updating the template status",
    updateTemplate: "An internal error occurred updating the template",
    validation: {
      sectionNotShown: "Section is missing a rule to make it visible",
      sectionEmpty: "Section has no content",
      emptyLabel: "Label is empty",
      questionNotShown: "Question is missing a rule to make it visible",
      questionNotUsed: "Question is not used in the report",
      invalidToken: "Token is not defined",
      tokenNotUsed: "Token is not referenced",
      badlyFormedText: "Badly formed report text",
      emptyReportText: "Report text is empty",
      missingScore: "Score missing in scored answer",
    },
  },
  group: "Group",
  invalidOption: "Invalid option",
  inValidOptionValue: "Invalid option value",
  isHidden: "{0} is shown",
  isShown: "{0} is hidden",
  layout: {
    welcome: "Welcome to the Leo Template Editor",
    toBegin: "To begin, add chapters and sections using the lefthand panel.",
    withSelectedChapter:
      "With a selected chapter or section you can begin to add questions and report text.",
    anySection:
      "Any section or question can be shown or hidden using the rules engine.",
    testTemplate:
      "You can test out the template using the simulate report panel.",
  },
  maximumAllowedScore: "The maximum allowed score is {0}",
  maximumScoreCannotBeLessThan: "Maximum score cannot be less than {0}",
  observationReportText: "Observation Report Text",
  onlyShowNewest: "Only show the newest version of the template",
  operator: "Operator",
  orientation: {
    portrait: "Portrait",
    landscape: "Landscape",
  },
  newSimulation: "New Simulation",
  properties: "Properties",
  question: {
    question: "Question",
    additionalText: "Additional Text",
    additionalTextHelp:
      "Provide any additional text to clarify how to answer the question",
    answerMap: "Answer Map",
    createAndContinue: "Create & Continue",
    createAndContinueHelp:
      "After saving this question, continue and create another question",
    createReportText: "Create report text for the answer",
    createReportTextHelp:
      "Creates a new report text item for the answer at the end of the section",
    isVisible: "Is Visible?",
    isVisibleHelp:
      "Is the question visible by default? If it is not, it can be made to appear via a rule",
    isRequired: "Is Required?",
    isRequiredHelp:
      "Specify if an answer is required to this question before the user can complete the report",
    isScored: "Is Scored?",
    isScoredHelp:
      "Specify if the question has a score. If so you will need to provide a maximum score and scores for each answer",
    isToken: "Is Token?",
    isTokenHelp:
      "The token is used in the report text. The answer to the question is put into the report text in place of the token",
    maxScore: "Maximum Score",
    maxScoreHelp:
      "The maximum score for this question, no answer can have a score above this value.",
    move: "Move question to {0}",
    moveReportText: "Move report text to {0}",
    noneDefined:
      "No question has been defined for this section. Click the add button to add a new question.",
    questionTextHelp: "Type the question or statement to be made here",
    setUpOnCreation: "Set up on Creation?",
    setUpOnCreationHelp:
      "Specify if you want this question to be asked when the report is created.",
    doNotDuplicate: "Do Not Duplicate",
    doNotDuplicateHelp:
      "When duplicating a report, do not duplicate the answer to this question.",
    token: "Token",
    tokenHelp:
      "The token name is not shown to the user and is used to reference the answer to this question, we recommend you give it a short descriptive name",
    customReportText: "Custom Report Text",
    customReportTextHelp:
      "Enter here additional text to give the answer some context.\nThe report answer will be substituted for the token #{{0}}.\nThis custom text can then be used in the report text simply with the original token of #{{1}}",
    chapterOnly: "Chapter only?",
    chapterOnlyHelp:
      "Is the user signing against just this chapter, or the whole report?",
  },
  redFlagsAndConcerns: "Red flags, concerns and observations",
  redFlagOrConcern: "Red flag, Concern or Observation",
  redFlagOrConcernHelp: "The report text that will appears for this {0}",
  redFlagReportText: "Red Flag Report Text",
  registerMap: {
    propertyMap: "Map fields to Properties",
    parameterField: "Map from field in report",
    parameterName: "Map to parameter of invoked rule",
    register: "Register to update",
    rule: "Rule to invoke",
    title: "Register Updates on Publish",
    column: {
      assignedTo: "Assigned user",
      clearMapping: "Clear the mapped field",
      publishedBy: "Publishing user",
      publishedOn: "Date the report is published",
      reportName: "Name of report",
    },
  },
  ruleForm: {
    concern: "Create a concern",
    hideControl: "Hide the {0}",
    observation: "Create an observation",
    redFlag: "Create a red flag",
    showControl: "Show the {0}",
    setVariableValue: "Set the variable value",
    setValue: "Set the answer for the question",
  },
  clickToEditRule: "Click to edit this rule: {0} => {1}",
  rule: {
    addRule: "Add a new rule",
    createConcern: "Create concern for {0} - {1}",
    createObservation: "Create observation for {0} - {1}",
    createRedFlag: "Create red flag for {0} - {1}",
    name: "Rule Name",
    is: "is",
    of: "of",
    entity: "entity",
    equal: "equals",
    notEqual: "is not equal to",
    setTo: "Set {0} to {1}",
    setToValue: "Set {0} to value of {1}",
    visible: "Visible",
    hidden: "Hidden",
    unconditional: "Unconditional",
    noActions: "no actions",
    numberOfActions: "{0} actions",
    matchesConditions: "matches {0} conditions",
    removeFilter: "Remove filter for {0}",
    unknown: "Unknown",
    undefined: "Undefined",
  },
  rules: "Rules",
  rulesFor: "Rules for {0}",
  concernReportText: "Concern Report Text",
  scored: "Scored",
  sectionForm: {
    addSection: "Add Section",
    configureSection: "Configure Section",
    deleteSection: "Delete Section",
    help: {
      title: "Enter the chapter or section title",
      sectionTips:
        "If you have any help text to guide the user in this chapter/section, enter it here",
      contentType:
        "Indicate the type of summary that the section will hold. The report text will be automatically filled in.",
      isVisible:
        "Is the chapter/section visible by default?  If it’s a section that won’t always apply, then make it not visible and create a rule to show it when specific conditions are met.",
      isScored:
        "Is the chapter to be scored as part of the report? This will allow scores to be recorded against the answers",
      isCloneable:
        "Select if you want the user to be able to create copies of this chapter/section whilst filling in the report. An example is a section to describe a Person of Interest. The user might have several Persons of Interest they want to include, so they would want to create as many copies of the section as they need.",
      move: "Do you wish to move the section to here or make it a child section?",
      createAndContinue:
        "After creating this section, continue and create another section",
      doNotDuplicateHelp:
        "When duplicating a report, do not duplicate the answers to the questions in this section.",
    },
    label: {
      sectionTips: "Section Tips",
      contentType: "Content Type",
      isCloneable: "Is Cloneable?",
      cloneableText: "Cloneable Text",
      assignedUserType: "Assigned User Type",
      doNotDuplicate: "Do Not Duplicate",
    },
    move: {
      before: "Move to before {0}",
      after: "Move to after {0}",
      child: "Set as child of {0}",
      to: "Move to - {0}",
    },
    summary: {
      redflag: "Red Flag Summary",
      concern: "Concerns Summary",
      scoring: "Scoring Summary",
      executive: "Executive Summary",
    },
  },
  sectionList: {
    addChapterOrSection: "Add a new Chapter or Section",
    addQuestion: "Add a new question",
    addParagraph: "Add a new paragraph into the report text",
    clickEditQuestion:
      "Click to edit the question or drag to reorder and add to report text.",
    clickEditReportText: "Click to edit the report text or drag to reorder",
    questionsAndAnswers: "Questions and Answers",
    noReportTextDefined:
      "No report text has been defined for this section. Click the add button for manual text or drag a question down to include its output.",
    moveSection: "Move Section",
    moveToSection: "Move to Section",
    selectQuestions: "Select multiple questions",
    selectReportText: "Select multiple report text",
  },
  showRules: "Show rules",
  stat: {
    archived: "Archived",
    draft: "Draft",
    released: "Released",
    unused: "Unused",
    test: "Test",
  },
  template: {
    delete: "Delete Template",
    duplicate: "Duplicate Template",
    name: "Template name",
    new: "New Template",
    update: "Update Template",
    uneditableDueToStatus:
      "This template is in '{0}' status and cannot be edited.",
  },
  templateForm: {
    copyTemplate: "Copy the template and retain the version history",
    createTemplate: "Create a new template without the version history",
    uniqueName: "Name must be unique",
    versionNumDecimal: "Version number must be decimal separated integers",
    versionNumCannotDecrease: "Cannot decrease version number",
    help: {
      templateName: "The name of the template shown to the users",
      versionNumber: "A distinct version number for the template",
      retainCorrelation:
        "Indicates if this template link back to the previous version",
      orientation:
        "Select how the page will be orientated whe creating a PDF for a report",
      hasProgram:
        "Indicates if the template is linked to a compliance risk assessment. This setting cannot be changed after creating the template.",
      submitAction:
        "Indicates the result of submitting a report built from the template. Reports can be automatically published or require reviewing after being submitted.",
    },
    label: {
      versionNumber: "Version Number",
      templateStatus: "Template Status",
      templateOptions: "Template Options",
      orientation: "Page Orientation",
      scoredReport: "Scored Report",
      moduleName: "Module to assign the template to",
      reportingOptions: "Reporting Options",
      executiveSummary: "Create Executive Summary?",
      hasReportCover: "Show report cover?",
      hasTableContents: "Show table of contents?",
      submitAction: "Action when submitting report",
      mirrorRedFlagsConcerns: "Mirror Text to RF/Concern",
      confidential: "Confidential",
    },
    options: {
      review: "Requires review before publishing",
      reviewConcerns: "Review required if any concerns or red flags are raised",
      reviewRedFlags: "Review required only when red flags are raised",
      publish: "Automatically publish report without review",
    },
  },
  templates: "Templates",
  token: {
    isNotUnique: "Token is not unique for the template",
    missing: "A token is missing from the custom report text",
    notClosed: "Token expression is not closed",
    reportCannotRef: "Report text cannot reference the answer's token.",
  },
  trigger: {
    trigger: "Trigger",
    add: "Add a new trigger to the rule",
    delete: "Delete the trigger from the rule",
  },
  unknownAction: "Unknown action for template builder : {0}",
  unknownContent: 'Unknown content of type "{0}"',
  updateStatus: "Update Status",
  updateStatusOf: "Update Status of {0}",
  propertiesFor: "Properties for {0}",
  variable: "Variable",
  variables: "Variables",
  variableContent: {
    addVariable: "Add User Variable",
    tokenName: "Token Name",
    userDefinedFlag: "User defined variable",
    orphanedFlag: "Orphaned reference",
    orphaned: "Orphaned",
    userVariable: "User variable",
    answerToken: "Answer token",
    variableName: "Variable Name",
    sections: "Sections",
    questions: "Questions",
    variableType: "Variable Type",
    defaultValue: "Default value for the variable",
    isLockedLabel:
      "The variable is locked and its name can only be changed via the associated answer",
  },
  valueIsNotNumber: "Value is not a number",
  viewInfo: {
    reportDesigner: "Report Designer",
    rules: "Rules",
    simulateReport: "Simulate Report",
    variables: "Variables",
  },
};
