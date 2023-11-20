// Copyright (c) Leo RegTech Limited. All rights reserved.

export default {
  action: {
    add: "Ajouter une nouvelle action qui sera exécutée lorsque la règle est déclenchée, c’est-à-dire si une ou toutes les conditions sont remplies)",
    delete: "Supprimer l'action de la règle",
    label: "Actions à effectuer",
    name: "Action",
  },
  addChild: "Ajouter une sous-section",
  answer: "Réponse",
  answerConfig: {
    answerType: "Type de réponse",
    answerTypeHelp: "Sélectionnez le format de la réponse",
    attachment: {
      label: "Format de la pièce jointe",
      help: "Le format de la pièce jointe requis",
      options: {
        image: "Image dans le corps de texte",
        attachment: "Pièce jointe en annexe",
      },
    },
    table: {
      columnType: "Format de colonne",
      columnTypeHelp: "Sélectionnez le format de données de la colonne",
      columnNameHelp: "Entrez le nom de la colonne",
      options: "Options",
      optionsHelp: "Ajouter des options pour la colonne",
    },
    text: {
      label: "Format de réponse",
      help: "Le format de réponse à saisir si ce n'est pas du texte",
      options: {
        multiline: "Texte multiligne",
        numeric: "Numérique",
        alphaNumeric: "Alphanumérique",
        telephone: "Téléphone",
        date: "Date",
        futureDate: "Date ultérieure",
        dropdown: "Menu déroulant",
        radio: "Boutons radios – Choix unique", //"Boutons radios – Choix unique" as in "Boutons radios – Choix unique"
        attachment: "Pièce jointe",
        checkbox: "Case à cocher – Choix multiple",
        table: "Tableau",
        assignedUser: "Propriétaire",
        textField: "Texte rapide",
        richText: "Texte enrichi",
        additionalContent:
          "Créer raccourci pour ajouter du texte enrichi au rapport",
        signature: "Signature",
      },
    },
    options: {
      sourceVariable: "Source d'options",
      sourceVariableNone: "Configurez les options ici",
      answerOptions: "Options de réponse",
      answerNotScored: "La réponse n'est pas notée",
      answerNotScoredHelp:
        "Cochez pour indiquer que le score de la question doit être ignoré pour cette réponse",
      displayName: "Afficher le nom",
      displayNameHelp:
        "L'option de réponse qui apparaît lors de la finalisation du rapport",
      scoreHelp: "Entrez le score pour cette réponse",
      rFConcern: "Violations / Risques",
      cusRfCon: "Personnaliser une violation/un risque",
      reportTextHelp:
        "Le texte du rapport apparaît comme la réponse dans le rapport",
      redFlagOrConcernHelp:
        "Le choix de la réponse génère-t-il une violation ou un risque",
    },
  },
  assignedView: "Vue attribuée",
  changeRequirements: {
    duplicateTemplate:
      "Pour apporter des modifications, vous devez dupliquer le modèle dans un nouveau brouillon",
    updateStatus:
      "Pour apporter des modifications, vous devez mettre à jour le statut en brouillon",
  },
  client: "Client",
  clientTemplates: "Modèles de client",
  clientTemplate: {
    trackRFCs: {
      index:
        "Est-ce que les violations, risques et points d’attention doivent-ils être extraits dans la fonctionnalité de suivi des recommandations ??",
      track: {
        title: "Extraire dans la fonctionnalité de suivi des recommandations ",
        message:
          'Est-ce que vous voulez extraire "{0}" dans le suivi des recommandations ?',
      },
      untrack: {
        title: "Arrêter l’extraction dans le suivi des recommandations ",
        message:
          'Est-ce que vous souhaitez stopper d’extraire "{0}" dans le suivi des recommandations ?',
      },
    },
  },
  copy: "Dupliquer",
  complianceRiskAssessment: "Plan de contrôle",
  confirm: {
    deleteRule: "Veuillez confirmer que vous souhaitez supprimer cette règle",
  },
  components: {
    question: "Question",
    section: "Section",
  },
  condition: {
    condition: "Condition",
    conditions: "Conditions",
    add: "Ajouter une nouvelle condition qui déclenchera la règle",
    delete: "Supprimer la condition du déclencheur de la règle",
    matchAll: "Correspond à toutes les conditions",
    matchAny: "Correspond à n'importe quelle condition",
  },
  configureViews: "Réorganiser les vues",
  configureRegisterMap: "Paramètres de mises à jour du registre",
  cannotDeleteMultiple: [
    "Ces éléments ne peuvent pas être supprimés car ils font partie d'une ou plusieurs règles.",
    "Veuillez consulter les règles avant de supprimer ces éléments.",
  ],
  cannotDeleteSingle: [
    "Cet élément ne peut pas être supprimé car il fait partie d'une ou plusieurs règles.",
    "Veuillez consulter les règles avant de supprimer ces éléments.",
  ],
  controlName: "Nom du contrôle",
  createDuplicate: "Créer une copie",
  error: {
    problemLoading: "Un problème est survenu lors du chargement du modèle",
    unknownAction: "Action inconnue pour l’éditeur de modèle",
    creatingReport: "Une erreur s'est produite lors de la création du rapport",
    updatingReport:
      "Une erreur s'est produite lors de l’enregistrement des modifications du rapport",
    loadDialog: "Échec du chargement de la boîte de dialogue",
    sectionSettings:
      "Une erreur interne s'est produite lors de l’enregistrement des paramètres de la section",
    updatingReportText:
      "Une erreur interne s'est produite lors de l’enregistrement du texte du rapport",
    duplicateTemplate:
      "Une erreur interne s'est produite lors de la duplication du modèle",
    unableToCompleteForMode:
      "Impossible de terminer l'action pour le mode « {0} »",
    createTemplate:
      "Une erreur interne s'est produite lors de la création du nouveau modèle",
    deleteTemplate:
      "Une erreur interne s'est produite lors de la suppression du modèle",
    updateTemplateStatus:
      "Une erreur interne s'est produite lors de l’enregistrement de l'état du modèle",
    updateTemplate:
      "Une erreur interne s'est produite lors de l’enregistrement du modèle",
    validation: {
      badlyFormedText: "Texte de rapport mal formaté",
      emptyLabel: "Le champ est vide",
      emptyReportText: "Le texte du rapport est vide",
      invalidToken: "Le code n'est pas défini",
      questionNotShown:
        "Il manque une règle à la question pour la rendre visible",
      questionNotUsed: "La question n'est pas utilisée dans le rapport",
      sectionEmpty: "La section n'a pas de contenu",
      sectionNotShown: "La section manque une règle pour la rendre visible",
      tokenNotUsed: "Le code n'est pas référencé",
      missingScore: "Notation manquante dans la réponse notée",
    },
  },
  group: "Groupe",
  invalidOption: "Option invalide",
  inValidOptionValue: "Valeur d'option non valide",
  isHidden: "{0} est masqué",
  isShown: "{0} est affiché",
  layout: {
    welcome: "Bienvenue dans l'éditeur de modèle Leo",
    toBegin:
      "Pour commencer, ajoutez des chapitres et des sections à l'aide du panneau de gauche.",
    withSelectedChapter:
      "Avec un chapitre ou une section sélectionnée, vous pouvez commencer à ajouter des questions et le texte du rapport.",
    anySection:
      "Toute section ou question peut être affichée ou masquée à l'aide du système de règles.",
    testTemplate:
      "Vous pouvez tester le modèle à l'aide de l’aperçu de rapport.",
  },
  maximumAllowedScore: "Le score maximum autorisé est {0}",
  maximumScoreCannotBeLessThan:
    "Le score maximum ne peut pas être inférieur à {0}",
  observationReportText:
    "Point d’attention (Utiliser le texte du rapport pour le texte du résumé des anomalies)",
  onlyShowNewest: "Afficher uniquement la version la plus récente du modèle",
  operator: "Opérateur",
  orientation: {
    portrait: "Portrait",
    landscape: "Paysage",
  },
  newSimulation: "Nouvelle simulation",
  properties: "Propriétés",
  question: {
    question: "Question",
    additionalText: "Texte supplémentaire",
    additionalTextHelp:
      "Fournissez tout texte supplémentaire pour clarifier la réponse à la question",
    answerMap: "Réponses préremplies",
    createAndContinue: "Créer et continuer",
    createAndContinueHelp:
      "Après avoir enregistré cette question, continuez et créez une autre question",
    createReportText: "Créer un texte de rapport pour la réponse",
    customReportTextHelp:
      "Entrez ici un texte supplémentaire pour donner du contexte à la réponse.\nLa réponse du rapport sera remplacée par le code #{{0}}.\nCe texte personnalisé peut ensuite être utilisé dans le rapport simplement en utilisant le code suivant #{{1}}",
    isVisible: "Visible",
    isVisibleHelp:
      "La question doit-elle être visible par défaut ? En cochant cette case, la question sera visible par défaut. Si ce n'est pas le cas, la question peut être affichée si une ou plusieurs conditions sont remplies via une règle.",
    isRequired: "Obligatoire",
    isRequiredHelp:
      "La question est-elle obligatoire ? En cochant cette case, la réponse à la question sera requise pour que l'utilisateur puisse compléter le rapport.",
    isScored: "Noté",
    isScoredHelp:
      "La question est-elle notée ? En cochant cette case, l’utilisateur devra fournir une note/un score maximum et des notes/scores pour chaque réponse.",
    isToken: "Tag",
    isTokenHelp:
      "Le tag est utilisé dans le rapport. La réponse à la question est insérée dans le rapport à la place du tag.",
    maxScore: "Score maximum",
    maxScoreHelp:
      "Le score maximum pour cette question, aucune réponse ne peut avoir un score supérieur à cette valeur.",
    move: "Déplacer la question vers {0}",
    moveReportText: "Déplacer le rapport vers {0}",
    noneDefined:
      "Aucune question n'a été définie pour cette section. Cliquez sur le bouton « Ajouter » pour ajouter une nouvelle question.",
    questionTextHelp: "Tapez la question à intégrer ici",
    setUpOnCreation: "Intégrer des questions à la création du rapport",
    setUpOnCreationHelp:
      "Indiquez si vous souhaitez que cette question soit posée lors de la création du rapport.",
    doNotDuplicate: "Ne pas conserver",
    doNotDuplicateHelp:
      "La réponse doit-elle être conservée lors de la duplication du rapport ? En cochant cette case, la réponse à cette question ne sera pas conservée lors de la duplication du rapport. Cela est utile si vous savez que la réponse ne doit pas être conservée pour un client ou une entité différente.",
    token: "Tag",
    tokenHelp:
      "Le tag n’est pas montré à l’utilisateur et est utilisé pour référencer la réponse à cette question, nous vous recommandons de lui donner un nom descriptif court.",
    customReportText: "Personnaliser le rapport",
    customReportTextHelp:
      "Entrez ici un texte supplémentaire pour donner du contexte à la réponse.\nLa réponse du rapport sera remplacée par le code #{{0}}.\nCe texte personnalisé peut ensuite être utilisé dans le rapport simplement en utilisant le code suivant #{{1}}",
    chapterOnly: "Chapitre uniquement",
    chapterOnlyHelp:
      "L’utilisateur doit-il signer uniquement ce chapitre ou l’ensemble du document ? En cochant cette case, l’utilisateur devra signer uniquement le chapitre.",
  },
  redFlagsAndConcerns: "Violations et risques",
  redFlagOrConcern: "Violation ou risque",
  redFlagOrConcernHelp: "Le rapport qui apparaîtra pour ce {0}",
  redFlagReportText:
    "Violation (Utiliser le texte du rapport pour le texte du résumé des anomalies)",
  registerMap: {
    column: {
      assignedTo: "Propriétaire",
      clearMapping: "Effacer les options",
      publishedBy: "Publié par",
      publishedOn: "Publié le",
      reportName: "Nom du rapport",
    },
    parameterField: "Répertorier à partir de données présentes dans le rapport",
    parameterName: "Utiliser la règle afférente pour cette donnée",
    propertyMap: "Appliquer les données aux propriétés",
    register: "Registre à mettre à jour",
    rule: "Règle afférente",
    title: "Les modifications du registre après publication du rapport",
  },
  ruleForm: {
    concern: "Créer un risque",
    hideControl: "Masquer le {0}",
    showControl: "Afficher le {0}",
    setVariableValue: "Définir la valeur de la variable",
    setValue: "Définir la réponse à la question",
    observation: "Créer un point d’attention",
    redFlag: "Créer une violation",
  },
  clickToEditRule: "Cliquez pour modifier cette règle : {0} => {1}",
  rule: {
    addRule: "Ajouter une nouvelle règle",
    createConcern: "Créer un risque pour {0} - {1}",
    createObservation: "Créer un point d’attention pour {0} - {1}",
    createRedFlag: "Créer une violation pour {0} - {1}",
    is: "est",
    of: "de",
    entity: "entité",
    equal: "égal à",
    notEqual: "n'est pas égal à",
    setTo: "Définir {0} pour {1}",
    setToValue: "Définissez {0} pour la valeur de {1}",
    visible: "Visible",
    hidden: "Masqué",
    unconditional: "Sans condition",
    noActions: "aucune action",
    numberOfActions: "{0} actions",
    matchesConditions: "correspond à {0} conditions",
    unknown: "Inconnu",
    undefined: "Non défini",
    name: "Nom de la règle",
  },
  rules: "Règles",
  rulesFor: "Règles pour {0}",
  concernReportText:
    "Risque (Utiliser le texte du rapport pour le texte du résumé des anomalies)",
  scored: "Noté",
  sectionForm: {
    addSection: "Ajouter une section",
    configureSection: "Paramétrer la section",
    deleteSection: "Supprimer la section",
    help: {
      title: "Entrez le titre du chapitre ou de la section",
      sectionTips:
        "Si vous avez un texte d'aide pour guider l'utilisateur dans ce chapitre / section, entrez-le ici",
      contentType:
        "Indiquez le type de résumé que la section contiendra. Le texte du rapport sera automatiquement rempli.",
      isVisible:
        "Le chapitre (ou section) doit-il être visible par défaut ? En cochant cette case, le chapitre (ou la section) sera visible par défaut. S'il s'agit d'une section qui ne s'applique pas toujours, ne cochez pas la case et créez une règle pour l'afficher lorsque des conditions spécifiques sont remplies.",
      isScored:
        "Le chapitre (ou la section) doit-il être noté dans le cadre du rapport ? En cochant cette case, cela permettra d'enregistrer les scores des différentes réponses.",
      isCloneable:
        "Le chapitre (ou la section) peut-il être dupliqué ? En cochant cette case, l'utilisateur pourra créer des copies de ce chapitre (ou de la section) tout en remplissant le rapport.",
      move: "Souhaitez-vous déplacer la section ici ou en faire une sous-section ?",
      createAndContinue:
        "Après avoir créé cette section, continuer et créer une autre section",
      doNotDuplicateHelp:
        "Lorsque de la duplication d’un rapport, ne pas conserver les réponses aux questions de cette section.",
    },
    label: {
      sectionTips: "Conseils pour les sections",
      contentType: "Format de contenu",
      isCloneable: "Duplicable",
      cloneableText: "Texte duplicable",
      assignedUserType: "Type de personne propriétaire",
      doNotDuplicate: "Ne pas conserver",
    },
    move: {
      before: "Déplacer avant {0}",
      after: "Déplacer après {0}",
      child: "Définir comme sous-section de {0}",
      to: "Déplacer vers - {0}",
    },
    summary: {
      redflag: "Violations",
      concern: "Risques",
      scoring: "Notations",
      executive: "Résumé des anomalies",
    },
  },
  sectionList: {
    addChapterOrSection: "Ajouter un nouveau chapitre ou une nouvelle section",
    addQuestion: "Ajouter une nouvelle question",
    addParagraph: "Ajouter un nouveau paragraphe dans le texte du rapport",
    clickEditQuestion:
      "Cliquez pour modifier la question ou faites-la glisser pour la réorganiser et l'ajouter au texte du rapport.",
    clickEditReportText:
      "Cliquez pour modifier le texte du rapport ou faites-le glisser pour le repositionner",
    questionsAndAnswers: "Questions et réponses",
    noReportTextDefined:
      "Aucun texte de rapport n'a été défini pour cette section. Cliquez sur le bouton d'ajout pour le texte manuel ou faites glisser une question vers le bas pour inclure sa sortie.",
    moveSection: "Déplacer la section",
    moveToSection: "Déplacer vers la section",
    selectQuestions: "Sélectionner plusieurs questions",
    selectReportText: "Sélectionner plusieurs textes de rapport",
  },
  showRules: "Afficher les règles",
  stat: {
    archived: "Archivé",
    draft: "Brouillon",
    released: "Publié",
    unused: "Inutilisé",
    test: "Test",
  },
  template: {
    delete: "Supprimer le modèle",
    duplicate: "Dupliquer le modèle",
    name: "Nom du modèle",
    new: "Nouveau modèle",
    update: "Modifier le modèle",
    uneditableDueToStatus:
      "Le modèle est à l’état « {0} » et ne peut pas être modifié.",
  },
  templateForm: {
    copyTemplate: "Copier le modèle et conserver l'historique des versions",
    createTemplate: "Créer un nouveau modèle sans l'historique des versions",
    uniqueName: "Le nom doit être unique",
    versionNumDecimal: "Le numéro de version doit être un nombre décimal.",
    versionNumCannotDecrease: "Impossible de diminuer le numéro de version",
    help: {
      templateName: "Le nom du modèle affiché aux utilisateurs",
      versionNumber: "Un numéro de version distinct pour le modèle",
      retainCorrelation: "Indique si ce modèle renvoie à la version précédente",
      orientation:
        "Sélectionnez l'orientation de la page lors de la création d'un PDF pour un rapport",
      hasProgram:
        "Indique si le modèle est lié à un plan de contrôle. Cela va créer automatiquement les thématiques dans le plan de contrôle. Ce paramètre ne peut pas être modifié après la création du modèle.",
      submitAction:
        "Indique le résultat de la soumission d'un rapport créé à partir du modèle. Les rapports peuvent être publiés automatiquement ou doivent être revus après avoir été soumis pour revue.",
    },
    label: {
      versionNumber: "Numéro de version",
      templateStatus: "Statut du modèle",
      templateOptions: "Options du modèle",
      orientation: "Orientation du rapport au format PDF",
      scoredReport: "Rapport noté",
      moduleName: "Module auquel attribuer le modèle",
      reportingOptions: "Options du rapport",
      executiveSummary: "Résumé des anomalies",
      hasReportCover: "Image de couverture du rapport",
      hasTableContents: "Table des matières",
      submitAction: "Action lors de la soumission du rapport",
      mirrorRedFlagsConcerns: "Texte miroir vers violations / risques",
      confidential: "Confidentiel",
    },
    options: {
      review: "Nécessite une revue avant publication",
      reviewConcerns:
        "Revue requise si des risques ou des violations sont détectés",
      reviewRedFlags:
        "Revue requise uniquement lorsque des violations sont détectées",
      publish: "Publier automatiquement le rapport sans revue",
    },
  },
  templates: "Modèles",
  token: {
    isNotUnique: "Le tag n’est pas unique pour le modèle",
    missing: "Un tag est absent pour le rapport",
    notClosed: "Il manque une accolade au tag, veuillez corriger.",
    reportCannotRef:
      "Le rapport ne peut pas faire référence à la réponse présente dans le tag",
  },
  trigger: {
    trigger: "Déclencheur",
    add: "Ajouter un nouveau déclencheur à la règle",
    delete: "Supprimer le déclencheur de la règle",
  },
  unknownAction: "Action inconnue pour l’éditeur de modèle : {0}",
  unknownContent: 'Contenu inconnu de type "{0}"',
  updateStatus: "Modifier le statut",
  updateStatusOf: "Modifier le statut de {0}",
  propertiesFor: "Propriétés du {0}",
  variable: "Variable",
  variables: "Variables",
  variableContent: {
    tokenName: "Nom du tag",
    userDefinedFlag: "Variable définie par l'utilisateur",
    orphanedFlag: "Référence manquante",
    orphaned: "Manquant",
    userVariable: "Variable de l’utilisateur",
    answerToken: "Tag de la réponse",
    variableName: "Nom de la variable",
    sections: "Sections",
    questions: "Questions",
    variableType: "Type de variable",
    defaultValue: "Valeur par défaut de la variable",
    isLockedLabel:
      "La variable est verrouillée et son nom ne peut être modifié que via la réponse associée",
  },
  valueIsNotNumber: "La valeur n'est pas un nombre",
  viewInfo: {
    reportDesigner: "Éditeur de modèle",
    rules: "Règles",
    simulateReport: "Aperçu du rapport",
    variables: "Variables",
  },
};
