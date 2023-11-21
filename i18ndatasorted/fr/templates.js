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
      help: "Le format de la pièce jointe requis",
      label: "Format de la pièce jointe",
      options: {
        attachment: "Pièce jointe en annexe",
        image: "Image dans le corps de texte",
      },
    },
    options: {
      answerNotScored: "La réponse n'est pas notée",
      answerNotScoredHelp:
        "Cochez pour indiquer que le score de la question doit être ignoré pour cette réponse",
      answerOptions: "Options de réponse",
      cusRfCon: "Personnaliser une violation/un risque",
      displayName: "Afficher le nom",
      displayNameHelp:
        "L'option de réponse qui apparaît lors de la finalisation du rapport",
      rFConcern: "Violations / Risques",
      redFlagOrConcernHelp:
        "Le choix de la réponse génère-t-il une violation ou un risque",
      reportTextHelp:
        "Le texte du rapport apparaît comme la réponse dans le rapport",
      scoreHelp: "Entrez le score pour cette réponse",
      sourceVariable: "Source d'options",
      sourceVariableNone: "Configurez les options ici",
    },
    table: {
      columnNameHelp: "Entrez le nom de la colonne",
      columnType: "Format de colonne",
      columnTypeHelp: "Sélectionnez le format de données de la colonne",
      options: "Options",
      optionsHelp: "Ajouter des options pour la colonne",
    },
    text: {
      help: "Le format de réponse à saisir si ce n'est pas du texte",
      label: "Format de réponse",
      options: {
        additionalContent:
          "Créer raccourci pour ajouter du texte enrichi au rapport",
        alphaNumeric: "Alphanumérique",
        assignedUser: "Propriétaire",
        attachment: "Pièce jointe",
        checkbox: "Case à cocher – Choix multiple",
        date: "Date",
        dropdown: "Menu déroulant",
        futureDate: "Date ultérieure",
        multiline: "Texte multiligne",
        numeric: "Numérique",
        radio: "Boutons radios – Choix unique",
        richText: "Texte enrichi",
        signature: "Signature",
        table: "Tableau",
        telephone: "Téléphone",
        textField: "Texte rapide",
      },
    },
  },
  assignedView: "Vue attribuée",
  cannotDeleteMultiple: [
    "Ces éléments ne peuvent pas être supprimés car ils font partie d'une ou plusieurs règles.",
    "Veuillez consulter les règles avant de supprimer ces éléments.",
  ],
  cannotDeleteSingle: [
    "Cet élément ne peut pas être supprimé car il fait partie d'une ou plusieurs règles.",
    "Veuillez consulter les règles avant de supprimer ces éléments.",
  ],
  changeRequirements: {
    duplicateTemplate:
      "Pour apporter des modifications, vous devez dupliquer le modèle dans un nouveau brouillon",
    updateStatus:
      "Pour apporter des modifications, vous devez mettre à jour le statut en brouillon",
  },
  clickToEditRule: "Cliquez pour modifier cette règle : {0} => {1}",
  client: "Client",
  clientTemplate: {
    trackRFCs: {
      index:
        "Est-ce que les violations, risques et points d’attention doivent-ils être extraits dans la fonctionnalité de suivi des recommandations ??",
      track: {
        message:
          'Est-ce que vous voulez extraire "{0}" dans le suivi des recommandations ?',
        title: "Extraire dans la fonctionnalité de suivi des recommandations ",
      },
      untrack: {
        message:
          'Est-ce que vous souhaitez stopper d’extraire "{0}" dans le suivi des recommandations ?',
        title: "Arrêter l’extraction dans le suivi des recommandations ",
      },
    },
  },
  clientTemplates: "Modèles de client",
  complianceRiskAssessment: "Plan de contrôle",
  components: {
    question: "Question",
    section: "Section",
  },
  concernReportText:
    "Risque (Utiliser le texte du rapport pour le texte du résumé des anomalies)",
  condition: {
    add: "Ajouter une nouvelle condition qui déclenchera la règle",
    condition: "Condition",
    conditions: "Conditions",
    delete: "Supprimer la condition du déclencheur de la règle",
    matchAll: "Correspond à toutes les conditions",
    matchAny: "Correspond à n'importe quelle condition",
  },
  configureRegisterMap: "Paramètres de mises à jour du registre",
  configureViews: "Réorganiser les vues",
  confirm: {
    deleteRule: "Veuillez confirmer que vous souhaitez supprimer cette règle",
  },
  controlName: "Nom du contrôle",
  copy: "Dupliquer",
  createDuplicate: "Créer une copie",
  error: {
    createTemplate:
      "Une erreur interne s'est produite lors de la création du nouveau modèle",
    creatingReport: "Une erreur s'est produite lors de la création du rapport",
    deleteTemplate:
      "Une erreur interne s'est produite lors de la suppression du modèle",
    duplicateTemplate:
      "Une erreur interne s'est produite lors de la duplication du modèle",
    loadDialog: "Échec du chargement de la boîte de dialogue",
    problemLoading: "Un problème est survenu lors du chargement du modèle",
    sectionSettings:
      "Une erreur interne s'est produite lors de l’enregistrement des paramètres de la section",
    unableToCompleteForMode:
      "Impossible de terminer l'action pour le mode « {0} »",
    unknownAction: "Action inconnue pour l’éditeur de modèle",
    updateTemplate:
      "Une erreur interne s'est produite lors de l’enregistrement du modèle",
    updateTemplateStatus:
      "Une erreur interne s'est produite lors de l’enregistrement de l'état du modèle",
    updatingReport:
      "Une erreur s'est produite lors de l’enregistrement des modifications du rapport",
    updatingReportText:
      "Une erreur interne s'est produite lors de l’enregistrement du texte du rapport",
    validation: {
      badlyFormedText: "Texte de rapport mal formaté",
      emptyLabel: "Le champ est vide",
      emptyReportText: "Le texte du rapport est vide",
      invalidToken: "Le code n'est pas défini",
      missingScore: "Notation manquante dans la réponse notée",
      questionNotShown:
        "Il manque une règle à la question pour la rendre visible",
      questionNotUsed: "La question n'est pas utilisée dans le rapport",
      sectionEmpty: "La section n'a pas de contenu",
      sectionNotShown: "La section manque une règle pour la rendre visible",
      tokenNotUsed: "Le code n'est pas référencé",
    },
  },
  group: "Groupe",
  inValidOptionValue: "Valeur d'option non valide",
  invalidOption: "Option invalide",
  isHidden: "{0} est masqué",
  isShown: "{0} est affiché",
  layout: {
    anySection:
      "Toute section ou question peut être affichée ou masquée à l'aide du système de règles.",
    testTemplate:
      "Vous pouvez tester le modèle à l'aide de l’aperçu de rapport.",
    toBegin:
      "Pour commencer, ajoutez des chapitres et des sections à l'aide du panneau de gauche.",
    welcome: "Bienvenue dans l'éditeur de modèle Leo",
    withSelectedChapter:
      "Avec un chapitre ou une section sélectionnée, vous pouvez commencer à ajouter des questions et le texte du rapport.",
  },
  maximumAllowedScore: "Le score maximum autorisé est {0}",
  maximumScoreCannotBeLessThan:
    "Le score maximum ne peut pas être inférieur à {0}",
  newSimulation: "Nouvelle simulation",
  observationReportText:
    "Point d’attention (Utiliser le texte du rapport pour le texte du résumé des anomalies)",
  onlyShowNewest: "Afficher uniquement la version la plus récente du modèle",
  operator: "Opérateur",
  orientation: {
    landscape: "Paysage",
    portrait: "Portrait",
  },
  properties: "Propriétés",
  propertiesFor: "Propriétés du {0}",
  question: {
    additionalText: "Texte supplémentaire",
    additionalTextHelp:
      "Fournissez tout texte supplémentaire pour clarifier la réponse à la question",
    answerMap: "Réponses préremplies",
    chapterOnly: "Chapitre uniquement",
    chapterOnlyHelp:
      "L’utilisateur doit-il signer uniquement ce chapitre ou l’ensemble du document ? En cochant cette case, l’utilisateur devra signer uniquement le chapitre.",
    createAndContinue: "Créer et continuer",
    createAndContinueHelp:
      "Après avoir enregistré cette question, continuez et créez une autre question",
    createReportText: "Créer un texte de rapport pour la réponse",
    customReportText: "Personnaliser le rapport",
    customReportTextHelp:
      "Entrez ici un texte supplémentaire pour donner du contexte à la réponse.\nLa réponse du rapport sera remplacée par le code #{{0}}.\nCe texte personnalisé peut ensuite être utilisé dans le rapport simplement en utilisant le code suivant #{{1}}",
    doNotDuplicate: "Ne pas conserver",
    doNotDuplicateHelp:
      "La réponse doit-elle être conservée lors de la duplication du rapport ? En cochant cette case, la réponse à cette question ne sera pas conservée lors de la duplication du rapport. Cela est utile si vous savez que la réponse ne doit pas être conservée pour un client ou une entité différente.",
    isRequired: "Obligatoire",
    isRequiredHelp:
      "La question est-elle obligatoire ? En cochant cette case, la réponse à la question sera requise pour que l'utilisateur puisse compléter le rapport.",
    isScored: "Noté",
    isScoredHelp:
      "La question est-elle notée ? En cochant cette case, l’utilisateur devra fournir une note/un score maximum et des notes/scores pour chaque réponse.",
    isToken: "Tag",
    isTokenHelp:
      "Le tag est utilisé dans le rapport. La réponse à la question est insérée dans le rapport à la place du tag.",
    isVisible: "Visible",
    isVisibleHelp:
      "La question doit-elle être visible par défaut ? En cochant cette case, la question sera visible par défaut. Si ce n'est pas le cas, la question peut être affichée si une ou plusieurs conditions sont remplies via une règle.",
    maxScore: "Score maximum",
    maxScoreHelp:
      "Le score maximum pour cette question, aucune réponse ne peut avoir un score supérieur à cette valeur.",
    move: "Déplacer la question vers {0}",
    moveReportText: "Déplacer le rapport vers {0}",
    noneDefined:
      "Aucune question n'a été définie pour cette section. Cliquez sur le bouton « Ajouter » pour ajouter une nouvelle question.",
    question: "Question",
    questionTextHelp: "Tapez la question à intégrer ici",
    setUpOnCreation: "Intégrer des questions à la création du rapport",
    setUpOnCreationHelp:
      "Indiquez si vous souhaitez que cette question soit posée lors de la création du rapport.",
    token: "Tag",
    tokenHelp:
      "Le tag n’est pas montré à l’utilisateur et est utilisé pour référencer la réponse à cette question, nous vous recommandons de lui donner un nom descriptif court.",
  },
  redFlagOrConcern: "Violation ou risque",
  redFlagOrConcernHelp: "Le rapport qui apparaîtra pour ce {0}",
  redFlagReportText:
    "Violation (Utiliser le texte du rapport pour le texte du résumé des anomalies)",
  redFlagsAndConcerns: "Violations et risques",
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
  rule: {
    addRule: "Ajouter une nouvelle règle",
    createConcern: "Créer un risque pour {0} - {1}",
    createObservation: "Créer un point d’attention pour {0} - {1}",
    createRedFlag: "Créer une violation pour {0} - {1}",
    entity: "entité",
    equal: "égal à",
    hidden: "Masqué",
    is: "est",
    matchesConditions: "correspond à {0} conditions",
    name: "Nom de la règle",
    noActions: "aucune action",
    notEqual: "n'est pas égal à",
    numberOfActions: "{0} actions",
    of: "de",
    setTo: "Définir {0} pour {1}",
    setToValue: "Définissez {0} pour la valeur de {1}",
    unconditional: "Sans condition",
    undefined: "Non défini",
    unknown: "Inconnu",
    visible: "Visible",
  },
  ruleForm: {
    concern: "Créer un risque",
    hideControl: "Masquer le {0}",
    observation: "Créer un point d’attention",
    redFlag: "Créer une violation",
    setValue: "Définir la réponse à la question",
    setVariableValue: "Définir la valeur de la variable",
    showControl: "Afficher le {0}",
  },
  rules: "Règles",
  rulesFor: "Règles pour {0}",
  scored: "Noté",
  sectionForm: {
    addSection: "Ajouter une section",
    configureSection: "Paramétrer la section",
    deleteSection: "Supprimer la section",
    help: {
      contentType:
        "Indiquez le type de résumé que la section contiendra. Le texte du rapport sera automatiquement rempli.",
      createAndContinue:
        "Après avoir créé cette section, continuer et créer une autre section",
      doNotDuplicateHelp:
        "Lorsque de la duplication d’un rapport, ne pas conserver les réponses aux questions de cette section.",
      isCloneable:
        "Le chapitre (ou la section) peut-il être dupliqué ? En cochant cette case, l'utilisateur pourra créer des copies de ce chapitre (ou de la section) tout en remplissant le rapport.",
      isScored:
        "Le chapitre (ou la section) doit-il être noté dans le cadre du rapport ? En cochant cette case, cela permettra d'enregistrer les scores des différentes réponses.",
      isVisible:
        "Le chapitre (ou section) doit-il être visible par défaut ? En cochant cette case, le chapitre (ou la section) sera visible par défaut. S'il s'agit d'une section qui ne s'applique pas toujours, ne cochez pas la case et créez une règle pour l'afficher lorsque des conditions spécifiques sont remplies.",
      move: "Souhaitez-vous déplacer la section ici ou en faire une sous-section ?",
      sectionTips:
        "Si vous avez un texte d'aide pour guider l'utilisateur dans ce chapitre / section, entrez-le ici",
      title: "Entrez le titre du chapitre ou de la section",
    },
    label: {
      assignedUserType: "Type de personne propriétaire",
      cloneableText: "Texte duplicable",
      contentType: "Format de contenu",
      doNotDuplicate: "Ne pas conserver",
      isCloneable: "Duplicable",
      sectionTips: "Conseils pour les sections",
    },
    move: {
      after: "Déplacer après {0}",
      before: "Déplacer avant {0}",
      child: "Définir comme sous-section de {0}",
      to: "Déplacer vers - {0}",
    },
    summary: {
      concern: "Risques",
      executive: "Résumé des anomalies",
      redflag: "Violations",
      scoring: "Notations",
    },
  },
  sectionList: {
    addChapterOrSection: "Ajouter un nouveau chapitre ou une nouvelle section",
    addParagraph: "Ajouter un nouveau paragraphe dans le texte du rapport",
    addQuestion: "Ajouter une nouvelle question",
    clickEditQuestion:
      "Cliquez pour modifier la question ou faites-la glisser pour la réorganiser et l'ajouter au texte du rapport.",
    clickEditReportText:
      "Cliquez pour modifier le texte du rapport ou faites-le glisser pour le repositionner",
    moveSection: "Déplacer la section",
    moveToSection: "Déplacer vers la section",
    noReportTextDefined:
      "Aucun texte de rapport n'a été défini pour cette section. Cliquez sur le bouton d'ajout pour le texte manuel ou faites glisser une question vers le bas pour inclure sa sortie.",
    questionsAndAnswers: "Questions et réponses",
    selectQuestions: "Sélectionner plusieurs questions",
    selectReportText: "Sélectionner plusieurs textes de rapport",
  },
  showRules: "Afficher les règles",
  stat: {
    archived: "Archivé",
    draft: "Brouillon",
    released: "Publié",
    test: "Test",
    unused: "Inutilisé",
  },
  template: {
    delete: "Supprimer le modèle",
    duplicate: "Dupliquer le modèle",
    name: "Nom du modèle",
    new: "Nouveau modèle",
    uneditableDueToStatus:
      "Le modèle est à l’état « {0} » et ne peut pas être modifié.",
    update: "Modifier le modèle",
  },
  templateForm: {
    copyTemplate: "Copier le modèle et conserver l'historique des versions",
    createTemplate: "Créer un nouveau modèle sans l'historique des versions",
    help: {
      hasProgram:
        "Indique si le modèle est lié à un plan de contrôle. Cela va créer automatiquement les thématiques dans le plan de contrôle. Ce paramètre ne peut pas être modifié après la création du modèle.",
      orientation:
        "Sélectionnez l'orientation de la page lors de la création d'un PDF pour un rapport",
      retainCorrelation: "Indique si ce modèle renvoie à la version précédente",
      submitAction:
        "Indique le résultat de la soumission d'un rapport créé à partir du modèle. Les rapports peuvent être publiés automatiquement ou doivent être revus après avoir été soumis pour revue.",
      templateName: "Le nom du modèle affiché aux utilisateurs",
      versionNumber: "Un numéro de version distinct pour le modèle",
    },
    label: {
      confidential: "Confidentiel",
      executiveSummary: "Résumé des anomalies",
      hasReportCover: "Image de couverture du rapport",
      hasTableContents: "Table des matières",
      mirrorRedFlagsConcerns: "Texte miroir vers violations / risques",
      moduleName: "Module auquel attribuer le modèle",
      orientation: "Orientation du rapport au format PDF",
      reportingOptions: "Options du rapport",
      scoredReport: "Rapport noté",
      submitAction: "Action lors de la soumission du rapport",
      templateOptions: "Options du modèle",
      templateStatus: "Statut du modèle",
      versionNumber: "Numéro de version",
    },
    options: {
      publish: "Publier automatiquement le rapport sans revue",
      review: "Nécessite une revue avant publication",
      reviewConcerns:
        "Revue requise si des risques ou des violations sont détectés",
      reviewRedFlags:
        "Revue requise uniquement lorsque des violations sont détectées",
    },
    uniqueName: "Le nom doit être unique",
    versionNumCannotDecrease: "Impossible de diminuer le numéro de version",
    versionNumDecimal: "Le numéro de version doit être un nombre décimal.",
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
    add: "Ajouter un nouveau déclencheur à la règle",
    delete: "Supprimer le déclencheur de la règle",
    trigger: "Déclencheur",
  },
  unknownAction: "Action inconnue pour l’éditeur de modèle : {0}",
  unknownContent: 'Contenu inconnu de type "{0}"',
  updateStatus: "Modifier le statut",
  updateStatusOf: "Modifier le statut de {0}",
  valueIsNotNumber: "La valeur n'est pas un nombre",
  variable: "Variable",
  variableContent: {
    answerToken: "Tag de la réponse",
    defaultValue: "Valeur par défaut de la variable",
    isLockedLabel:
      "La variable est verrouillée et son nom ne peut être modifié que via la réponse associée",
    orphaned: "Manquant",
    orphanedFlag: "Référence manquante",
    questions: "Questions",
    sections: "Sections",
    tokenName: "Nom du tag",
    userDefinedFlag: "Variable définie par l'utilisateur",
    userVariable: "Variable de l’utilisateur",
    variableName: "Nom de la variable",
    variableType: "Type de variable",
  },
  variables: "Variables",
  viewInfo: {
    reportDesigner: "Éditeur de modèle",
    rules: "Règles",
    simulateReport: "Aperçu du rapport",
    variables: "Variables",
  },
};
