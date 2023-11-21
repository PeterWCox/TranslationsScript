// Copyright (c) Leo RegTech Limited. All rights reserved.

export default {
  UserGroups: {
    ARDirector: "Dirigeant agent lié",
    AREmployee: "Employé(e) agent lié",
    Administrator: "Administrateur",
    CDDCustomer: "Client KYC",
    CDDManagement: "Administrateur CDD",
    CDDTeam: "Équipe KYC",
    ClientsDirector: "Dirigeant",
    ComplianceManagement: "Responsable de la conformité",
    ComplianceTeam: "Équipe conformité",
    DDLicenseeClientUser: "DD Licensee Client User",
    DDManagement: "DD Management",
    DDTeam: "DD Team",
    DDThirdParty: "DD Third Party",
    Employee: "Employé",
    ThirdParty: "Tierce partie",
  },
  allow_document_review: {
    description:
      "Autoriser le remplissage de la zone de commentaire pour revue, à chaque question, d’un rapport.",
    name: "Revoir un rapport",
  },
  archive_data: {
    description:
      "Autoriser la modification des paramètres du compte de l’archivage.",
    name: "Administrateur de l’archivage",
  },
  can_hide_report_text: {
    description: "Autoriser le masquage du texte d’un rapport.",
    name: "Masquer une partie du texte d’un rapport",
  },
  can_preview_report: {
    description: "Autoriser la prévisualisation d’un rapport au format PDF.",
    name: "Créer un aperçu PDF d’un rapport",
  },
  can_undo_report_text: {
    description:
      "Autoriser l’annulation des modifications du texte d’un rapport.",
    name: "Refuser les modifications ",
  },
  chapter_assignment: {
    description: "Autoriser l’assignation  de chapitre.",
    name: "Assigner un chapitre",
  },
  client_configuration: {
    description:
      "Autoriser la modification des paramètres du compte concernant ces sujets.",
    name: "Administrateur : Logos, 2FA et aperçus",
  },
  create_new_client: {
    description: "Autoriser la création de client.",
    name: "Créer un client",
  },
  create_register: {
    description: "Autoriser à la création de registre.",
    name: "Créer un registre",
  },
  dashboard_admin: {
    description:
      "Autoriser la modification des paramètres du compte des catégories de l’accueil.",
    name: "Administrateur des catégories de l’accueil",
  },
  display_exception_report: {
    description:
      "Autoriser la visualisation des modifications d’un rapport dupliqué.",
    name: "Voir les modifications d’un rapport dupliqué",
  },
  document_exchange_admin: {
    description:
      "Autoriser la gestion de toutes les requêtes de partage de documents.",
    name: "Administrateur du partage de documents",
  },
  duplicate_report: {
    description: "Autoriser la duplication de rapport.",
    name: "Dupliquer un rapport",
  },
  edit_cmp: {
    description:
      "Autoriser la création et la modification de plan de contrôle.",
    name: "Créer et modifier un plan de contrôle",
  },
  edit_red_flags_concerns: {
    description: "Autoriser la modification des violations et risques.",
    name: "Modifier les violations et risques",
  },
  edit_report_sections: {
    description:
      "Autoriser l’ajout et le renommage des chapitres et des sections.",
    name: "Ajouter/Renommer des chapitres et des sections",
  },
  edit_report_text: {
    description: "Autoriser la modification du texte d’un rapport.",
    name: "Modifier le texte du rapport",
  },
  firm_profile: {
    description: "Autoriser la modification du responsable du compte Leo.",
    name: "Modifier le responsable du compte Leo",
  },
  pa_dealings_admin: {
    description:
      "Autoriser la modification des paramètres du compte des transactions personnelles.",
    name: "Administrateur des transactions personnelles",
  },
  pa_dealings_approver: {
    description: "Autoriser l’approbation de transactions personnelles.",
    name: "Approuver des transactions personnelles",
  },
  permissions: "Autorisations",
  publish_cmp: {
    description: "Autoriser la publication de plan de contrôle.",
    name: "Publier un plan de contrôle",
  },
  publish_report: {
    description: "Autoriser la publication de rapport.",
    name: "Publier un rapport",
  },
  register_admin: {
    description:
      "Autoriser la modification des paramètres du compte des registres.",
    name: "Administrateur des registres",
  },
  register_column_modify: {
    description:
      "Autoriser la modification de la colonne pour toutes les lignes du registre.",
    name: "Modifier toute la colonne",
  },
  register_column_modify_assigned: {
    description:
      "Autoriser la modification de la donnée de la colonne, uniquement si l’utilisateur est propriétaire de la ligne.",
    name: "Modifier la donnée de la colonne si propriétaire de la ligne",
  },
  register_column_read: {
    description:
      "Afficher les données de la colonne pour toutes les lignes du registre.",
    name: "Voir toute la colonne",
  },
  register_column_read_assigned: {
    description:
      "Afficher la donnée de la colonne, uniquement si l’utilisateur est propriétaire de la ligne.",
    name: "Voir la donnée de la colonne si propriétaire de la ligne",
  },
  register_create: {
    description: "Autoriser la création de nouvelles lignes dans le registre.",
    name: "Créer des lignes",
  },
  register_delete_any: {
    description:
      "Autoriser la suppression de n’importe quelle ligne du registre.",
    name: "Tout supprimer",
  },
  register_delete_assigned: {
    description:
      "Autoriser la suppression d’une ligne, uniquement si l’utilisateur en est le propriétaire.",
    name: "Supprimer une ligne si propriétaire",
  },
  register_full_control: {
    description:
      "Autoriser l’importation, l’exportation, la suppression, la modification, le verrouillage et le déverrouillage de toutes les lignes du registre.",
    name: "Toutes les autorisations",
  },
  register_lock_any: {
    description:
      "Autoriser le verrouillage et le déverrouillage de n’importe quelle ligne du registre.",
    name: "Tout verrouiller/déverrouiller",
  },
  register_lock_assigned: {
    description:
      "Autoriser le verrouillage et le déverrouillage d’une ligne, uniquement si l’utilisateur en est le propriétaire.",
    name: "Verrouiller/Déverrouiller une ligne si propriétaire",
  },
  register_modify_all: {
    description: "Autoriser la modification de toutes les lignes du registre.",
    name: "Tout modifier ",
  },
  register_modify_assigned: {
    description:
      "Autoriser la modification d’une ligne, uniquement si l’utilisateur en est le propriétaire.",
    name: "Modifier une ligne si propriétaire",
  },
  register_port_data: {
    description:
      "Autoriser l’importation ou l’exportation des données du registre.",
    name: "Importer/Exporter des données",
  },
  register_read_all: {
    description:
      "Afficher toutes les lignes du registre pour l’utilisateur/le groupe.",
    name: "Tout voir",
  },
  register_read_assigned: {
    description:
      "Afficher une ligne, uniquement si l’utilisateur en est le propriétaire.",
    name: "Voir une ligne si propriétaire",
  },
  report_comments: {
    description: "Afficher et autoriser l’ajout de commentaires.",
    name: "Commenter un rapport",
  },
  report_owner_rights: {
    description:
      "Autoriser la sélection en tant que propriétaire de rapport. C’est-à-dire qu’un rapport peut être assigné à l’utilisateur.",
    name: "Propriétaire de rapport",
  },
  report_reviewer_rights: {
    description: "Autoriser la sélection en tant que réviseur de rapport.",
    name: "Réviseur de rapport",
  },
  repository_active_reports_assigned_chapters_edit: {
    description:
      "Autoriser la modification d’un chapitre d’un rapport actif (en cours ou en revue) de ce module, uniquement si l’utilisateur en est le propriétaire.",
    name: "Modifier chapitre rapport actif - Propriétaire",
  },
  repository_active_reports_assigned_chapters_read: {
    description:
      "Afficher un chapitre d’un rapport actif (en cours ou en revue) de ce module, uniquement si l’utilisateur est propriétaire du chapitre.",
    name: "Voir chapitre rapport actif - Propriétaire",
  },
  repository_active_reports_delete: {
    description:
      "Autoriser la suppression de n’importe quel rapport actif (en cours ou en revue) de ce module.",
    name: "Supprimer rapport actif - Tout",
  },
  repository_active_reports_edit: {
    description:
      "Autoriser la modification de tous les rapports actifs (en cours ou en revue) de ce module.",
    name: "Modifier rapport actif - Tout",
  },
  repository_active_reports_read: {
    description:
      "Afficher tous les rapports actifs (en cours ou en revue) de ce module à ces utilisateurs/groupes.",
    name: "Voir rapport actif - Tout",
  },
  repository_admin: {
    description:
      "Autoriser la modification des paramètres du compte des modules.",
    name: "Administrateur des modules",
  },
  repository_assigned_active_reports_delete: {
    description:
      "Autoriser la suppression d’un rapport actif (en cours ou en revue) de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Supprimer rapport actif - Propriétaire",
  },
  repository_assigned_active_reports_edit: {
    description:
      "Autoriser la modification d’un rapport actif (en cours ou en revue) de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Modifier rapport actif - Propriétaire",
  },
  repository_assigned_active_reports_read: {
    description:
      "Afficher un rapport actif (en cours ou en revue) de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Voir rapport actif - Propriétaire",
  },
  repository_assigned_report_documents_read: {
    description:
      "Afficher la/les pièce(s) jointe(s) d’un rapport de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Voir pièce jointe rapport - Propriétaire",
  },
  repository_assigned_report_documents_upload: {
    description:
      "Autoriser l’importation d’une pièce jointe aux rapports de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Importer pièce jointe rapport - Propriétaire",
  },
  repository_document_delete_any: {
    description:
      "Autoriser la suppression de n’importe quelle pièce-jointe des rapports de ce module.",
    name: "Supprimer pièce jointe module - Tout",
  },
  repository_document_delete_uploaded: {
    description:
      "Autoriser la suppression d’une pièce jointe aux rapports de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Supprimer pièce jointe module - Propriétaire",
  },
  repository_document_read: {
    description:
      "Afficher toutes les pièces jointes du module à ces utilisateurs/groupes.",
    name: "Voir pièce jointe module",
  },
  repository_document_upload: {
    description: "Autoriser l’importation de pièce(s) jointe(s) au module.",
    name: "Importer pièce-jointe module",
  },
  repository_full_control: {
    description:
      "Autoriser l’ajout, la modification, l’archivage, la récupération d’archive(s) et la suppression de tous les éléments dans ce module.",
    name: "Toutes les autorisations",
  },
  repository_published_assigned_reports_read: {
    description:
      "Afficher un rapport publié de ce module, uniquement si l’utilisateur est propriétaire du rapport.",
    name: "Voir rapport publié - Propriétaire",
  },
  repository_published_reports_read: {
    description:
      "Afficher tous les rapports publiés de ce module à ces utilisateurs/groupes.",
    name: "Voir rapport publié - Tout",
  },
  repository_report_create: {
    description:
      "Autoriser la création de rapport dans ce module à ces utilisateurs/groupes.",
    name: "Créer un rapport",
  },
  repository_report_documents_read: {
    description:
      "Afficher toutes les pièces jointes aux rapports de ce module.",
    name: "Voir pièce jointe rapport - Tout",
  },
  repository_report_documents_upload: {
    description:
      "Autoriser l’importation de pièce jointe à tous les rapports de ce module.",
    name: "Importer pièce jointe rapport - Tout",
  },
  show_document_exchange: {
    description:
      "Afficher le partage de documents pour un ou des utilisateurs.",
    name: "Voir le partage de documents",
  },
  show_executive_summary: {
    description:
      "Afficher les sommaires des rapports pour un ou des utilisateurs.",
    name: "Voir les sommaires",
  },
  show_pa_dealing: {
    description:
      "Afficher les transactions personnelles pour un ou des utilisateurs.",
    name: "Voir les transactions personnelles",
  },
  show_questions: {
    description: "Afficher les questions aux utilisateurs.",
    name: "Voir les questions",
  },
  show_red_flags_concerns: {
    description: "Afficher les violations et risques aux utilisateurs.",
    name: "Voir les violations et risques",
  },
  show_registers: {
    description: "Afficher les registres pour un ou des utilisateurs.",
    name: "Voir les registres",
  },
  show_remedial_actions: {
    description:
      "Afficher le suivi des recommandations pour un ou des utilisateurs.",
    name: "Voir le suivi des recommandations",
  },
  show_report_text: {
    description: "Afficher le texte du rapport aux utilisateurs.",
    name: "Voir le texte du rapport",
  },
  show_tasks: {
    description: "Afficher le calendrier pour un ou des utilisateurs.",
    name: "Voir le calendrier",
  },
  submit_for_review: {
    description:
      "Autoriser la soumission de rapports pour revue en affichant le bouton correspondant.",
    name: "Soumettre pour revue",
  },
  task_admin: {
    description: "Autoriser l’administration des tâches.",
    name: "Administrateur des tâches",
  },
  template_admin: {
    description:
      "Autoriser la modification des paramètres du compte des modèles.",
    name: "Administrateur des modèles",
  },
  user_group_admin: {
    description:
      "Autoriser la modification des paramètres du compte des groupes d’utilisateurs.",
    name: "Administrateur des groupes d'utilisateurs.",
  },
  user_management: {
    description:
      "Autoriser la modification des paramètres du compte des utilisateurs.",
    name: "Administrateur des utilisateurs",
  },
};
