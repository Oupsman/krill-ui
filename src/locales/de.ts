import { Translations } from '../core/translations';

export const translations: Translations = {
  'common': {
    'readthedocs': 'Lesen Sie die Dokumentation',
    'report': 'Ein Problem melden',
    'confirm': 'Bestätigen',
    'cancel': 'Abbruch',
    'ok': 'OK',
    'error': 'Error',
    'success': 'Erfolgreich!',
    'copy': 'In die Zwischenablage kopieren',
    'download': 'Download',
    'dropOrClick': 'Die Datei hierhin ziehen oder zum <em>Hochladen hier klicken</em>',
    'started': 'Krill läuft seit',
    'newversion': 'Es gibt eine neue Version!',
    'supportcontracts': 'Support Verträge',
    'warning': 'Warnung',
    'idle': 'Sie wurden aufgrund von Inaktivität ausgeloggt.',
    'nodata': 'Keine Daten',
    'copySuccess': 'XML in die Zwischenablage kopiert',
    'edit': 'Ändern',
    'page': 'page',
    'userInfo': {
      'title': 'Login Details',
      'user': 'Benutzer'
    }
  },
  'login': {
    'password': 'Passwort',
    'placeholder': 'Ihr Passwort',
    'signin': 'Einloggen',
    'required': 'Bitte geben Sie Ihr Passwort ein',
    'error': 'Das eingegebene Passwort ist falsch',
    'copied': 'Nutzen Sie kein Passwort von <a href=\'https://xkcd.com/936/\' target=\'_blank\'>https://xkcd.com/936/</a>',
    'id': 'Benutzer',
    'idPlaceholder': 'Ihr Benutzername',
    'idRequired': 'Bitte Ihren Benutzernamen eingeben',
    'retry': 'Klicken Sie {0} um zurück zum Login zu gelangen.',
    'here': 'hier'
  },
  'onboarding': {
    'welcome': 'Willkommen zu Krill',
    'welcomeHtml': 'Starten wir mit der Erstellung Ihrer RPKI Zertifizierungsstelle (CA). Diese wird zur Konfiguration einer delegierten RPKI mit einer oder mehreren Eltern-Zertifizierungsstellen benötigt. Im Normalfall ist dies Ihre Regionale oder Nationale Internet Registrierungsstelle.<br><br>Der von Ihnen gewählte Name wird zur Identifizierung Ihrer Zertifizierungsstelle gegenüber den Eltern- und Kinderzertifizierungsstellen genutzt. Der Name selber wird nicht in der RPKI veröffentlicht. Bitte wählen Sie den Namen so, dass er es anderen erlaubt Ihre Organisation zu identifizieren. Dieser Name kann nicht mehr geändert werden.',
    'addCAForm': {
      'required': 'Dies ist ein Pflichtfeld',
      'format': 'Kein gültiger Name für eine Zertifizierungsstelle',
      'confirm': 'Zertifizierungsstelle erstellen',
      'confirmation': {
        'title': 'Warnung',
        'message': 'Dieser Name kann nicht nachträglich geändert werden. Fortfahren?'
      }
    }
  },
  'cas': {
    'loading': 'Lade Zertifizierungsstellen',
    'ca': 'Zertifizierungsstelle',
    'cas': 'Zertifizierungsstellen',
    'search': 'Suche Zertifizierungsstellen...',
    'noCas': 'Aktuell sind keine Zertifizierungsstellen festgelegt.'
  },
  'caDetails': {
    'loading': 'Lade {handle}',
    'refresh': 'Aktualisiere {handle}. Dies kann einige Minuten dauern',
    'current': 'Aktuelle Zertifizierungsstelle',
    'download': 'Download PEM',
    'noRoas': 'Keine ROAs gefunden.',
    'noResources': 'Sie haben noch keine Ressourcen erhalten',
    'noChildren': 'Keine Kinder gefunden.',
    'addRoa': 'ROA hinzufügen',
    'roas': 'ROAs',
    'resources': 'Ressourcen',
    'parents': 'Eltern',
    'repo': 'Repository',
    'type': 'Typ',
    'properties': 'Eigenschaften',
    'property': 'Eigenschaft',
    'value': 'Wert',
    'kind': 'Art',
    'resource': 'Ressource',
    'children': 'Kinder',
    'handle': 'Name',
    'comment': 'Anmerkung',
    'maxLength': 'MaxLength',
    'maxLengthTooltip': 'Wenn maxLength nicht angegeben wird (-), wird die Präfixlänge genutzt.',
    'confirmation': {
      'title': 'Warnung',
      'message': 'Diese Aktion entfernt das ROA \'{prefix}-{max_length} => {asn}\'. Fortfahren?',
      'added': 'ROA hinzugefügt',
      'retired': 'ROA entfernt',
      'retiredSuccess': 'Das ROA wurde entfernt',
      'addedSuccess': 'Das ROA wurde hinzugefügt',
      'commentUpdatedSuccess': 'Die Anmerkung des ROAs wurde aktualisiert',
    },
    'addROAForm': {
      'required': 'Dies ist ein Pflichtfeld',
      'asn_format': 'Dies ist kein gültiges ASN',
      'prefix_format': 'Bitte geben Sie ein gültiges IPv4 oder IPv6 Präfix ein'
    },
    'onboardingWarning': 'Um Ihr Zertifikat und Ihre ROAs zu veröffentlichen müssen Sie Ihre Zertifizierungsstelle mit einer öffentlichen RPKI Datenbank (Repository) verbinden. Sobald die Konfiguration der Eltern-Zertifizierungsstelle abgeschlossen ist, wird die Relying Party Software mit dem Herunterladen Ihres Zertifikates sowie Ihrer ROAs, welche in dieser Datenbank veröffentlicht wurden, beginnen.',
    'initializeRepository': 'Sie müssen die RPKI Datenbank (Repository) konfigurieren bevor Ihre Zertifizierungsstelle die Resourcen-Zertifikate von der Eltern-Zertifizierungsstelle anfordern kann.',
    'initialize': 'Bitte initialisieren Sie die RPKI Datenbank (Repository) und/oder die Eltern-Zertifizierungsstelle zuerst.',
    'noResourcesYet': 'Sie haben noch keine Ressourcen erhalten',
    'clickToRefresh': 'Klicken Sie hier um neu zu laden',
    'parentsTab': {
      'request': 'Anfrage der Kinderzertifizierungsstelle',
      'response': 'Antwort der Eltern-Zertifizierungsstelle',
      'addParent': 'Eine zusätzliche Eltern-Zertifizierungsstelle hinzufügen',
      'addParentSuccess': 'Eltern-Zertifizierungsstelle hinzugefügt',
      'name': 'Name der Eltern-Zertifizierungsstelle',
      'namerequired': 'Ein Name der Eltern-Zertifizierungsstelle ist verpflichtend',
      'nameformat': 'Dies ist kein gültiger Name'
    },
    'repoTab': {
      'request': 'Anfrage des Publishers',
      'response': 'Antwort der Datenbank (Repository)',
      'addRepo': 'Eine Datenbank (Repository) hinzufügen',
      'addRepoSuccess': 'Datenbank (Repository) hinzugefügt'
    },
    'analyseThis': 'Meine ROAs analysieren',
    'analysis': 'ROA Analyse',
    'suggestions': {
      'following': 'Bitte überprüfen Sie die folgenden vorgeschlagenen Änderungen an Ihren ROAs.',
      'readMore': 'Weitere Informationen...',
      'nochanges': 'Keine Änderungsvorschläge im Moment',
      'adding': 'Hinzufügen',
      'removing': 'Entfernen des ROA',
      'keep': 'Alles beibehalten.',
      'willResult': 'Wird resultieren in',
      'yourChoice': 'Ihre Auswahl',
      'ourSuggestion': 'Unser Vorschlag',
      'ourSuggestionHelp': 'Unser Vorschlag basiert auf der RIPE RIS Routing Information, bitte überprüfen!',
      'addThis': 'Dieses hinzufügen',
      'removeThis': 'Dieses entfernen',
      'willAdd': 'Fügt dieses ROA hinzu',
      'willRemove': 'Entfernt dieses ROA',
      'reasons': {
        'not_found': 'Nicht gefunden',
        'not_held': 'Das Präfix ist nicht länger in einem Ihrer Zertifikate enthalten. Das ROA wird nicht veröffentlicht',
        'invalid_asn': 'Ungültiges ASN',
        'invalid_length': 'Ungültige Länge',
        'stale': 'Nicht sichtbar',
        'disallowing': 'ROA führt zu ungültigen Ankündigungen. Die Nutzung eines AS0 ROA wird stattdessen empfohlen.',
        'as0_redundant': 'Redundantes ROA',
        'redundant': 'Redundantes ROA',
        'too_permissive': 'Nicht restriktiv genug',
        'specific': 'Spezifische Ankündigungen im ROA erlauben welches nicht restriktiv genug wäre',
        'new': 'Neu'
      }
    },
    'syncParents': 'Synchronisiere mit Eltern-Zertifizierungsstelle',
    'syncRepo': 'Repository aktualisieren',
    'lastExchange': 'Letzte Synchronisierung',
    'exchangeUri': 'URI',
    'nextExchange': 'Nächste Synchronisierung vor',
    'allResources': 'Ihre zertifizierten IP- und ASN-Adressen',
    'entitlements': 'Berechtigte Adressen',
    'showEntitlements': 'Zeige Details',
    'parentCertificate': 'Eltern-Zertifikat',
    'published': 'Veröffentlicht'
  },
  'announcements': {
    'noRoasOrAnnouncements': 'Keine ROAs oder BGP-Ankündigung gefunden.',
    'search': 'Suche nach ASN, Präfix, Status...',
    'authorizes': 'Autorisiert {number} BGP-Ankündigungen',
    'disallows': 'Verweigert {number} BGP-Ankündigungen',
    'asn': 'ASN',
    'prefix': 'Präfix',
    'stateLabel': 'Status',
    'state': {
      'roa_seen': 'SICHTBAR',
      'roa_seen_help': 'Dieses ROA stimmt mit BGP Ankündigungen überein',
      'roa_unseen': 'NICHT SICHTBAR',
      'roa_unseen_help': 'Wir sehen keine BGP Ankündigungen welche mit dem ROA übereinstimmen',
      'roa_not_held': 'PRÄFIX ENTFERNT',
      'roa_not_held_help': 'Das Präfix ist nicht länger in einem Ihrer Zertifikate enthalten. Das ROA wird nicht veröffentlicht',
      'roa_no_announcement_info': 'KEINE BGP-ANKÜNDIGUNG INFORMATION',
      'roa_too_permissive': 'NICHT RESTRIKTIV GENUG',
      'roa_too_permissive_help': 'Dieses ROA stimmt mit BGP Ankündigungen überein, erlaubt darüber hinaus aber auch noch weitere BGP Ankündigungen',
      'roa_disallowing': 'Verursacht ungültige Ankündigungen',
      'roa_disallowing_help': 'Dieses ROA führt ausschließlich zu ungültigen Ankündigungen. Falls dies beabsichtigt ist, wird die Nutzung eines AS0 ROAs empfohlen.',
      'roa_redundant': 'REDUNDANT',
      'roa_redundant_help': 'Dieses ROA ist redundant da ein oder mehrere andere ROAs das Präfix, die Länge und das ASN bereits einschließen',
      'roa_as0': 'AS0',
      'roa_as0_help': 'Dieses ROA dient dazu alle BGP Ankündigungen für dieses Präfix zu verbieten',
      'roa_as0_redundant': 'REDUNDANT',
      'roa_as0_redundant_help': 'Dieses AS0 ROA ist redundant da ein oder mehrere andere ROAs das Präfix bereits einschließen',
      'announcement_not_found': 'NICHT GEFUNDEN',
      'announcement_not_found_help': 'Diese BGP Ankündigung wird von keinem Ihrer ROAs geschützt',
      'announcement_invalid_length': 'UNGÜLTIGE LÄNGE',
      'announcement_invalid_length_help': 'Diese BGP Ankündigung ist nicht erlaubt, da es spezifischer ist als das Präfix und die MaxLength welche Sie für dieses ASN autorisiert haben',
      'announcement_invalid_asn': 'UNGÜLTIGES ASN',
      'announcement_invalid_asn_help': 'Diese BGP Ankündigung ist nicht erlaubt, da Sie nur das Präfix für ein anderes ASN autorisiert haben'
    },
    'download': 'CSV herunterladen'
  },
  'deltaErrors': {
    'duplicates': 'ROA existiert bereits',
    'covered': 'Überlappendes ROA existiert',
    'notheld': 'Nicht Ihr Präfix',
    'unknowns': 'ROA existiert nicht',
    'invalid_length': 'Ungültige Länge',
    'covering': 'Überlappt mit bestehendem ROA',
    'as0_exists': 'Überlappendes AS0 ROA besteht bereits',
    'as0_overlaps': 'Überlappt bestehendes ROA'
  },
  'errors': {
    'repo_not_set': 'Sie müssen erst eine Datenbank (Repository) konfigurieren',
    'pub_unknown': 'Publisher \'{publisher}\' unbekannt',
    'pub_duplicate': 'Publisher \'{publisher}\' wurde bereits initialisiert',
    'pub_outside_jail': 'Publisher uri \'{uri}\' außerhalb der Datenbank (Repository) uri \'{sia_base}\'',
    'pub_uri_no_slash': 'Publisher uri \'{uri}\' muss mit einen Slash enden',
    'pub_no_embedded_repo': 'Keine integrierte Datenbank (Repository) konfiguriert',
    'ca_duplicate': 'Die Zertifizierungsstelle \'{ca}\' wurde bereits initialisiert',
    'ca_unknown': 'Die Zertifizierungsstelle \'{ca}\' ist unbekannt',
    'ca_repo_same': 'Diese Datenbank (Repository) ist bereits in Benutzung',
    'ca_repo_issue': 'Die Datenbank (Repository) hat folgenden Error zurückgeliefert: {cause}',
    'ca_repo_response_invalid_xml': 'Datenbank (Repository) Antwort ist ungültig',
    'ca_repo_response_wrong_xml': 'Antwort der Eltern-Zertifizierungsstelle anstatt der Datenbank (Repository) erhalten',
    'ca_parent_duplicate': 'Es existiert bereits eine Eltern-Zertifizierungsstelle mit dem Namen \'{parent}\'',
    'ca_parent_xml_duplicate': 'Diese Antwort XML ist bereits in Gebrauch von einer Eltern-Zertifizierungsstelle mit dem Namen \'{parent}\'',
    'ca_parent_unknown': 'Es existiert keine Eltern-Zertifizierungsstelle mit dem Namen \'{parent}\'',
    'ca_parent_issue': 'Error von Eltern-Zertifizierungsstelle empfangen \'{parent}\': {cause}',
    'ca_parent_response_invalid_xml': 'Ungültige Eltern-Zertifizierungsstelle xml empfangen',
    'ca_parent_response_wrong_xml': 'Datenbank (Repository) Antwort während des Hinzufügens der Eltern-Zertifizierungsstelle erhalten',
    'ca_child_duplicate': 'Es existiert bereits eine Kinder-Zertifizierungsstelle mit dem Namen \'{child}\'',
    'ca_child_unknown': 'Es existiert keine Kinder-Zertifizierungsstelle mit dem Namen \'{child}\'',
    'ca_child_resources_required': 'Sie müssen Ressourcen für die Kinder-Zertifizierungsstelle angeben \'{child}\'',
    'ca_roa_unknown': 'Unbekanntes ROA kann nicht entfernt werden \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_duplicate': 'ROA existiert bereits \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_invalid_max_length': 'Ungültige maxLength in ROA \'{prefix}-{max_length} => {asn}\'',
    'ca_roa_not_entitled': 'Das ROA Präfix \'{prefix}\' ist in keinem Ihrer aktuellen Zertifikate zu finden',
    'ta_not_allowed': 'Diese Funktionalität wird vom Test Vertrauensanker nicht unterstützt',
    'ta_name_reserved': 'Name reserviert',
    'ca_roa_delta_error': 'Das ROA wurde aus den folgenden Gründen zurückgewiesen',
    'api_insufficient_rights': 'Ihr Benutzer hat keine ausreichenden Rechte um die Aktion durchzuführen. Bitte kontaktieren Sie Ihren Administrator.',
    'api_invalid_credentials': 'Die eingegebenen Benutzerdaten waren inkorrekt.',
    'api_login_error': 'Während des Logins ist ein Fehler aufgetreten: {cause}',
    'api_auth_transient_error': 'Bei der Authentifizierung Ihrer Anfrage ist ein (temporärer) Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
    'api_auth_permanent_error': 'Bei der Authentifizierung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte kontaktieren Sie Ihren Administrator.',
    'api_auth_session_expired': 'Ihre Sitzung ist abgelaufen. Bitte loggen Sie sich erneut ein..',
    'general_error': 'Es ist ein Fehler aufgetreten. Bitte kontaktieren Sie Ihren Administrator.'
  },
  'testbed': {
    'welcome': 'Willkommen zur RPKI Testumgebung',
    'disclaimer': {
      'heading': 'Haftungsausschluss',
      'body': 'Diese Testumgebung stellt eine komplett unabhängige RPKI Hierarchie zu Evaluierungszwecken zu Verfügung. Sie erlaubt Ihnen die Registrierung jedweder Ressourcen für Ihre Kinder-Zertifizierungsstelle. Es werden keinerlei Garantien bezüglich der Verfügbarkeit des Dienstes gegeben. Falls Probleme auftreten, <a href=\'https://github.com/NLnetLabs/krill/issues/new\'>melden Sie diese bitte</a>.'
    },
    'rpconfighelp': {
      'heading': 'Testumgebungs TAL',
      'body': 'Um die Daten für diese Testumgebung zu laden, starten Sie bitte den Download von diesem <a href=\'{tallink}\'>Trust Anchor Locator</a> (TAL) und konfigurieren Sie diesen in Ihrer Relying Party Software. Bitte beachten Sie, dass Sie diesen TAL NIEMALS in einer Produktivumgebung einsetzen sollten. Er wird ausschließlich zu Testzwecken zur Verfügung gestellt.'
    },
    'regunreg': {
      'heading': '(De-)Registrieren',
      'body': '<p>Nutzen Sie das Formular um Ihre RPKI Zertifizierungsstelle als Kind der Testumgebung zu registrieren. Danach können Sie Route Origin Authorisations (ROAs) für Ihre Ressourcen erstellen.</p><p>Falls Sie nicht Ihre eigenen Rsync und RRDP Datenbanken bereitstellen wollen, können Sie das Publisher Registrierungsformular nutzen um Ihre ROAs in der Datenbank der Testumgebung zu veröffentlichen. Nutzen Sie das Deregistrierungsformular um bestehende Beziehungen aufzulösen (sogar die von anderen Nutzern der Testumgebung!).</p>'
    },
    'rfcdoclink': 'Klicken Sie hier um die RFC-8183 Dokumentation für dieses XML zu sehen',
    'childhandle': 'Kind Handle',
    'publisherhandle': 'Publisher Handle',
    'responseXML': 'Testumgebung Antwort XML',
    'addChild': {
      'heading': 'Zertifizierungsstelle registrieren',
      'requestXML': {
        'label': 'Kind Anfrage XML',
        'placeholder': 'Fügen Sie Ihr <child_request/> XML hier ein'
      },
      'asnresources': {
        'label': 'ASN Ressourcen',
        'placeholder': 'Die AS Ressourcen: z.B. AS1, AS3-4'
      },
      'ipv4resources': {
        'label': 'IPv4 Ressourcen',
        'placeholder': 'Die IPv4 Ressourcen: z.B. 192.168.0.0/16'
      },
      'ipv6resources': {
        'label': 'IPv6 Ressourcen',
        'placeholder': 'Die IPv6 Ressourcen: z.B. 2001:db8::/32'
      },
      'confirm': 'Kinder-Zertifizierungsstelle registrieren',
      'format': 'Dies ist keine valide Kind XML Anfrage',
      'required': 'Fügen Sie eine Kind XML Anfrage hinzu',
      'confirmation': {
        'title': 'Warnung',
        'message': 'Sind Sie sicher, dass Sie diese Kinder-Zertifizierungsstelle in der Testumgebung registrieren wollen?'
      },
      'success': 'Kinder-Zertifizierungsstelle \'{child_handle}\' wurde der Testumgebung hinzugefügt.',
      'registeranother': 'Eine andere Zertifizierungsstelle hinzufügen'
    },
    'removeChild': {
      'heading': 'Zertifizierungsstelle entfernen',
      'placeholder': 'Geben Sie den Namen der Zertifizierungsstelle ein welche entfernt werden soll',
      'confirm': 'Kinder-Zertifizierungsstelle entfernen',
      'confirmation': {
        'title': 'Warnung',
        'message': 'Sind Sie sicher, dass Sie diese Kinder-Zertifizierungsstelle aus der Testumgebung entfernen wollen?'
      },
      'success': 'Kinder-Zertifizierungsstelle \'{child_handle}\' wurde aus der Testumgebung entfernt.'
    },
    'addPublisher': {
      'heading': 'Publisher registrieren',
      'requestXML': {
        'label': 'Publisher Anfrage XML',
        'placeholder': 'Fügen Sie Ihr <publisher_request/> XML hier ein'
      },
      'confirm': 'Publisher registrieren',
      'format': 'Dies ist keine valide Publisher XML Anfrage',
      'required': 'Fügen Sie eine Publisher XML Anfrage hinzu',
      'confirmation': {
        'title': 'Warnung',
        'message': 'Sind Sie sicher, dass Sie diesen Publisher in der Testumgebung registrieren wollen?'
      },
      'success': 'Publisher \'{publisher_handle}\' wurde der Testumgebung hinzugefügt.',
      'registeranother': 'Einen anderen Publisher hinzufügen'
    },
    'removePublisher': {
      'heading': 'Publisher entfernen',
      'placeholder': 'Geben Sie den Namen des Publishers ein welcher entfernt werden soll',
      'confirm': 'Publisher entfernen',
      'confirmation': {
        'title': 'Warnung',
        'message': 'Sind Sie sicher, dass Sie diesen Publisher aus der Testumgebung entfernen wollen?'
      },
      'success': 'Publisher \'{publisher_handle}\' wurde aus der Testumgebung entfernt.'
    },
    'errors': {
      'invalid_xml': 'Ungültiges XML: {err}',
      'missing_xml_el': 'Fehlendes Element {el}',
      'missing_xml_child_el': 'Fehlendes Kind-Element {el} vom Element {parent}',
      'missing_xml_attr': 'Fehlendes Attribut {attr} vom Element {el}',
      'empty_xml_el': 'Element {el} darf nicht leer sein',
      'empty_xml_attr': 'Attribut {attr} vom Element {el} darf nicht leer sein',
      'non_ascii_xml_el': 'Element {el} darf nur ASCII-Zeichen enthalten',
      'child_handle_required': 'Kind Handle wird benötigt',
      'publisher_handle_required': 'Publisher Handle wird benötigt',
      'non_base64_certificate_xml_el': 'Element {el} muss ein korrektes Base64 encodiertes selbst-signiertes X.509 BPKI Zertifikat enthalten',
      'invalid_registration_data': 'Ihre Registrierungsdaten konnten nicht korrekt verarbeitet werden'
    }
  }
};
