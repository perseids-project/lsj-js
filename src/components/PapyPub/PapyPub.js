import React from 'react';
import styles from './PapyPub.module.css';

const PapyPub = () => (
  <div className={`${styles.pplistContainer}`}>
    <h6>
		Henry George Liddell and Robert Scott
    </h6>
    <h5 className="pt-3">
    	Papyrological Publications
    </h5>
    <ul>
	<li><u>BGU = Berliner griechische Urkunden (&Auml;gyptische Urkunden aus den K&ouml;niglichen Museen zu Berlin</u>), Berlin 1895-.</li>
	<li><u>BKT = Berliner Klassikertexte, herausgegeben von der Generalver- waltung der Kgl. Museen zu Berlin,</u>&nbsp;Berlin 1904-.</li>
	<li><u>Berichtigungsl. = Berichtigungsliste der griechischen Papyrusurkunden aus &Auml;gypten:</u>&nbsp;I. F. Preisigke, Hefte 1 &amp; 2, Strassburg 1913; Hefte 3 &amp; 4, Berlin &amp; Leipzig 1922; II. F. Bilabel, Heidelberg 1931, 1933.</li>
	<li>Bilabel Ὀψαρτ. = F. Bilabel, Ὀψαρτυτικά; <u>und Verwandtes (Sitzungs- berichte d. Heidelberger Akademie der Wissenschaften, Phil.-hist. Kl.</u>&nbsp;1919, 23.&nbsp;<u>Abh.</u>), Heidelberg 1920.</li>
	<li><u>CPHerm. = Corpus Papyrorum Hermopolitanorum</u>&nbsp;i, ed. C. Wessely (<u>Studien zur Pal&auml;ogr. u. Papyruskunde</u>&nbsp;v), Leipzig 1905.</li>
	<li><u>CPR = Corpus Papyrorum Raineri Archiducis Austriae,</u>&nbsp;vol. i,&nbsp;<u>Griechische Texte,</u>&nbsp;ed. C. Wessely, Wien 1895; cf.&nbsp;<u>PRain.(NS).</u></li>
	<li>Διηγήσεις ῀ Διηγήσεις <u>di poemi di Callimaco in un papiro di Tebtynis,</u>&nbsp;a cura di M. Norsa e G. Vitelli, Firenze 1934: cited by column and line; ed. A. Vogliano&nbsp;<u>PUniv.Milan.</u>i. 18.</li>
	<li>Frisk&nbsp;<u>Bankakten = Bankakten aus dem Faij&ucirc;m nebst anderen Ber- liner Papyri,</u>&nbsp;ed. H. Frisk (<u>G&ouml;teborgs Kungl. Vetenskaps- och Vitterhets-Samh&auml;lles Handlingar, femte f&ouml;ljden, Ser.A. Band 2 No. 2</u>), G&ouml;teborg 1931.</li>
	<li><u>Herc.</u>&nbsp;(following an author's name) = Herculaneum papyri, cited by No. of papyrus and column or fragment from&nbsp;<u>Herculanensium Voluminum quae supersunt, Collectio altera,</u>Naples 1862-76, D. Bassi,&nbsp;<u>Herculanensium Voluminum, Collectio tertia,</u>&nbsp;fasc. i, Milan 1914, and other publications; 'Epicureus&nbsp;<u>Herc.</u>&nbsp;. . p. . . V.' refers to&nbsp;<u>Epicuri et Epicureorum scripta</u>&nbsp;. . , ed. A. Vogliano (v. I (Add.) s.v. Epicurus).</li>
	<li><u>Kapsomenakis</u>&nbsp;= S. G. Kapsomenakis,&nbsp;<u>Voruntersuchungen zu einer Grammatik der Papyri der nachchristlichen Zeit,</u>&nbsp;Munich 1938.</li>
	<li>Meyer&nbsp;<u>Ostr.</u>&nbsp;= Ostraca in&nbsp;<u>P.Meyer</u>&nbsp;(q.v.).</li>
	<li>Mitteis&nbsp;<u>Chr.,</u>&nbsp;Wilcken&nbsp;<u>Chr.</u>&nbsp;= L. Mitteis &amp; U. Wilcken,&nbsp;<u>Grundz&uuml;ge und Chrestomathie der Papyruskunde,</u>&nbsp;Leipzig &amp; Berlin 1912.</li>
	<li>M&ouml;ller&nbsp;<u>Pap.Berl.Mus.</u>&nbsp;= S. M&ouml;ller,&nbsp;<u>Griechische Papyri aus dem Ber- liner Museum,</u>G&ouml;teborg 1929.</li>
	<li><u>Ostr.</u>&nbsp;= U. Wilcken,&nbsp;<u>Griechische Ostraka aus &Auml;gypten und Nubien,</u>&nbsp;Leipzig &amp; Berlin 1899.</li>
	<li><u>Ostr.Bodl.</u>&nbsp;= J. G. Tait,&nbsp;<u>Greek Ostraca in the Bodleian Library and other collections,</u>&nbsp;I, London 1930 (cited by No. of part and No. of ostracon).</li>
	<li><u>Ostr.Mich.</u>&nbsp;= L. Amundsen,&nbsp;<u>Greek Ostraca in the University of Michigan Collection,</u>&nbsp;Part I, Texts ( = University of Michigan Studies, Humanistic Series, vol. xxxiv), Ann Arbor 1935.</li>
	<li><u>Ostr.Strassb. = Griechische und griechisch-demotische Ostraka der Universit&auml;ts- und Landesbibliothek zu Strassburg,</u>&nbsp;ed. P. Viereck, Berlin 1923.</li>
	<li><u>Ostr.Wilbour</u>&nbsp;= C. Pr&eacute;aux,&nbsp;<u>Les ostraca grecs de la Collection Charles-Edwin Wilbour an Musee de Brooklyn,</u>&nbsp;New York 1935.</li>
	<li><u>PAberd. = Catalogue of Greek &amp; Latin papyri &amp; ostraca in the pos- session of the University of Aberdeen,</u>&nbsp;ed. E. G. Turner (<u>Aberdeen Univ. Studies</u>&nbsp;No. 116), 1939.</li>
	<li><u>PAlex. = Papyrus ptol&eacute;ma&iuml;ques du Musee d' Alexandrie,</u>&nbsp;ed. G. Botti,&nbsp;<u>Bull.Soc.Alex.</u>&nbsp;First Series No. 2 (1899) p. 65.</li>
	<li><u>PAmh. = Amherst Papyri,</u>&nbsp;ed. B. P. Grenfell &amp; A. S. Hunt, 2 vols., London 1900-1; cited by No. of vol., papyrus, and line.</li>
	<li><u>PAntin. = the Antinoe Papyrus</u>&nbsp;of Theocritus in&nbsp;<u>Two Theocritus Papyri,</u>&nbsp;ed. A. S. Hunt &amp; J. Johnson, London 1930.</li>
	<li><u>PAvrom. = Parchments of the Parthian period from Avroman in Kurdistan,</u>&nbsp;ed. E. H. Minns,&nbsp;<u>JHS</u>&nbsp;xxxv (1915) p. 22.</li>
	<li><u>PBaden</u>&nbsp;= F. Bilabel,&nbsp;<u>Ver&ouml;ffentlichungen aus den badischen Papyrus- Sammlungen,</u>&nbsp;Heft 2 and Heft 4,&nbsp;<u>Griechische Papyri,</u>&nbsp;Heidelberg 1923, 1924.</li>
	<li><u>PBasel = Papyrusurkunden der &ouml;ffentlichen Bibliothek der Universit&auml;t zu Basel,</u>&nbsp;I.&nbsp;<u>Urkunden in griechischer Sprache,</u>&nbsp;ed. E. Rabel (<u>Abh. G&ouml;tt. Gesellsch.</u>&nbsp;Neue Folge, vol. xvi, No. 3), Berlin 1917.</li>
	<li><u>PBerl.Leihg. = Berliner Leihgabe griechischer Papyri,</u>&nbsp;herausgegeben vom griechischen Seminar der Universit&auml;t Uppsala durch T. Kal&eacute;n, Uppsala 1932.</li>
	<li><u>PBerol.</u>&nbsp;= Berlin Papyri, cited by inventory No. (<u>PBerol.</u>&nbsp;6926, 7927v = B. Lavagnini,&nbsp;<u>Eroticorum Graecorum Fragmenta Papyra- cea,</u>&nbsp;Leipzig (T.) 1922, pp. 1ff., 21ff.).</li>
	<li><u>PBouriant = Les papyrus Bouriant,</u>&nbsp;ed. P. Collart, Paris 1926.</li>
	<li><u>PBremen</u>&nbsp;= U. Wilcken,&nbsp;<u>Die Bremer Papyri (Abhandlungen der Preussischen Akademie der Wissenschaften,</u>&nbsp;1936, Phil.-hist. Klasse No. 2), Berlin 1936.</li>
	<li><u>PCair.</u>&nbsp;= Cairo Papyri cited by catalogue No. from B. P. Grenfell &amp; A. S. Hunt,&nbsp;<u>Greek Papyri, Catalogue g&eacute;n&eacute;ral des Antiquit&eacute;s &eacute;gyptiennes du Mus&eacute;e du Caire,</u>&nbsp;vol. x, Nos. 10001-10869, Oxford 1903.</li>
	<li><u>PCair.Preis.</u>&nbsp;= F. Preisigke,&nbsp;<u>Griechische Urkunden des &auml;gyptischen Museums zu Kairo (Schriften der wissenschaftlichen Gesellschaft zu Strassburg,</u>&nbsp;IIeft 8), Strassburg 1911.</li>
	<li><u>PCair.Zen.</u>&nbsp;= C. C. Edgar,&nbsp;<u>Zenon Papyri,</u>&nbsp;4 vols. (<u>Catal. g&eacute;n. des Antiq. &eacute;gypt. du Mus&eacute;e du Caire,</u>&nbsp;79) 1925-31: digits indicating 59(000) omitted in refs., thus 2 = 59002.</li>
	<li><u>PCornell = Greek Papyri in the Library of Cornell University,</u>&nbsp;ed. W. L. Westermann &amp; C. J. Kraemer, New York 1926.</li>
	<li><u>PEdgar</u>&nbsp;= C. C. Edgar,&nbsp;<u>Selected papyri from the archives of Zenon, Annales du Service des Antiquit&eacute;s de l' &Eacute;gypte,</u>&nbsp;Nos. 1-10 in vol. xviii (1918) pp. 159-82; Nos. 11-21, ib. pp. 224-44; Nos. 22- 36, vol. xix (1920) pp. 13-36; Nos. 37-48, ib. pp. 81-104; Nos. 49-54, vol. xx (1920) pp. 19-40; Nos. 55-64, ib. pp. 181-206; Nos. 65-6, vol. xxi (1921) pp. 89-109; Nos. 67-72, vol. xxii (1922) pp. 209-31; Nos. 73-76, vol. xxiii (1923) pp. 73-98; Nos. 77-88, ib. pp. 187-209; Nos. 89-104. vol. xxiv (1924) pp. 17-52.</li>
	<li><u>PEleph. = Elephantine Papyri,</u>&nbsp;ed. O. Rubensohn,&nbsp;<u>&Auml;gyptische Ur- kunden aus den Kgl. Museen zu Berlin: Griechische Urkunden:</u>&nbsp;Sonderheft, Berlin 1907.</li>
	<li><u>PEnteux. = Publications de la Soci&eacute;t&eacute; royale &eacute;gyptienne de Papyrologie, Textes et Documents</u>, i, Ἐντεύξεις. . , ed. O. Gu&eacute;raud, Cairo 1931-2.</li>
	<li><u>PFay.</u>&nbsp;= B. P. Grenfell, A. S. Hunt, D. G. Hogarth,&nbsp;<u>Fay&ucirc;m Towns and their Papyri,</u>London 1900.</li>
	<li><u>PFlor. = Papiri Fiorentini, documenti pubblici e privati dell' et&agrave; romana e bizantina:</u>&nbsp;I ed. G. Vitelli, Milano 1906; II ed. D. Comparetti, 1908-11; III ed. G. Vitelli, 1915.</li>
	<li><u>PFrankf.</u>&nbsp;= H. Lewald,&nbsp;<u>Griechische Papyri aus dem Besitz des rechts- wissenschaftlichen Seminars der Universit&auml;t Frankfurt (Sitzungs- berichte der Heidelberger Akademie der Wissenschaften, Phil.-hist. Kl.</u>&nbsp;1920, 14.&nbsp;<u>Abh.</u>).</li>
	<li><u>PFreib. = Mitteilungen aus der Freiburger Papyrussammlung,</u>&nbsp;in&nbsp;<u>Sitzungsberichte der Heidelberger Akademie der Wissenschaften, Phil.-hist. Klasse,</u>&nbsp;1914, 2.&nbsp;<u>Abh.,</u>&nbsp;1916, 10.&nbsp;<u>Abh.</u></li>
	<li><u>PGand} = Quelques papyrus des collections de Gand et de Paris,</u>&nbsp;ed.</li>
	<li><u>PSorb.}</u>&nbsp;M. Hombert,&nbsp;<u>Revue belge de Philologie et d' Histoire</u>&nbsp;iv (1925), 633-76: republished in&nbsp;<u>Sammelb.</u>&nbsp;iii.</li>
	<li><u>PGen. = Les papyrus de Gen&egrave;ve</u>&nbsp;transcrits et publi&eacute;s par Jules Nicole, Geneva 1896, 1900.</li>
	<li><u>PGiss. = Griechische Papyri im Museum des oberhessischen Geschichts- vereins zu Giessen,</u>&nbsp;Bd. I, Hefte 1-3, ed. O. Eger, E. Kornemann, P. M. Meyer, Leipzig etc. 1910-12.</li>
	<li><u>PGnom. = Der Gnomon des Idios Logos (BGU</u>&nbsp;v (1) 1210) ed. W. Schubart 1919.</li>
	<li><u>PGoodsp.</u>&nbsp;= E. J. Goodspeed,&nbsp;<u>A group of Greek papyrus texts (Class. Phil.</u>&nbsp;i, 1906, p. 167).</li>
	<li><u>PGoodsp.Cair.</u>&nbsp;= E. J. Goodspeed,&nbsp;<u>Greek papyri from the Cairo</u>&nbsp;<u>Museum . . (Decennial publications of the University of Chicago,</u>&nbsp;1st series, vol. v p. 3), Chicago 1904.</li>
	<li><u>PGot.</u>&nbsp;= H. Frisk,&nbsp;<u>Papyrus grecs de la Bibl. Municipale de Gothem- bourg,</u>&nbsp;G&ouml;teborg 1929.</li>
	<li><u>PGrad.</u>&nbsp;= G. Plaumann,&nbsp;<u>Griechische Papyri der Sammlung Graden- witz (Sitzungsberichte der Heidelberger Akademie der Wissen- schaften,</u>&nbsp;1914, 15.&nbsp;<u>Abh.</u>).</li>
	<li><u>PGrenf.</u>&nbsp;1. = B. P. Grenfell.&nbsp;<u>An Alexandrian erotic fragment and other Greek papvri chiefly Ptolemaic,</u>&nbsp;Oxford 1896. 2. = B. P. Grenfell &amp; A. S. Hunt,&nbsp;<u>New Classical Fragments and other Greek and Latin papyri.</u>&nbsp;1897.</li>
	<li><u>PGurob = Greek papyri from Gurob,</u>&nbsp;ed. J. G. Smyly (Royal Irish Academy, Cunningham Memoirs, No. 12, Dublin-London 1921).</li>
	<li><u>PHal.</u>&nbsp;= Halle Papyri =&nbsp;<u>Dikaiomata: Ausz&uuml;ge aus alexandrinischen Gesetzen und Verordnungen in einem Papyrus des Philologischen Seminars der Universit&auml;t Halle, mit einem Anhang . . herausgegeben von der Graeca Halensis</u>&nbsp;. . , Berlin 1913.</li>
	<li><u>PHamb.</u>&nbsp;= P. M. Meyer,&nbsp;<u>Griechische Papyrusurkunden der Ham- burger Stadtbibliothek (Staats- und Universit&auml;tsbibliothek</u>&nbsp;1924), Bd. 1, Leipzig etc. 1911-24.</li>
	<li><u>PHarris = The Rendel Harris Papyri,</u>&nbsp;ed. J. Enoch Powell, Cam- bridge 1936.</li>
	<li><u>PHaw. = The Hawara Papyri,</u>&nbsp;ed. [Sir] W. M. Flinders Petrie,&nbsp;<u>Hawara, Biahmu, and Arsinoe,</u>&nbsp;1889: in part re-edited by J. G. Milne,&nbsp;<u>Arch. Pap.</u>&nbsp;v (1913) p. 378:&nbsp;<u>PHaw.</u>&nbsp;80 and 81 re-edited by U. Wilcken in&nbsp;<u>Genethliakon f&uuml;r C. Robert,</u>&nbsp;Berlin 1910, p. 191.</li>
	<li><u>PHeid. = Ver&ouml;ffentlichungen aus der Heidelberger Papyrussammlung</u>&nbsp;(vol. i = A. Deissmann,&nbsp;<u>Die Septuaginta-Papyri und andere alt- christliche Texte,</u>&nbsp;1905; vol. iii (1) = C. H. Becker,&nbsp;<u>Papyri Schott- Reinhardt,</u>&nbsp;i, 1906).</li>
	<li><u>PHib. = Hibeh Papyri,</u>&nbsp;Part I, ed. B. P. Grenfell &amp; A. S. &lt;*&gt;nt, London 1906.</li>
	<li><u>PHolm. = Papyrus Graecus Holmiensis,</u>&nbsp;ed. O. Lagercrantz, Upp- sala 1913.</li>
	<li><u>PIand. = Papyri Iandanae: cum discipulis edidit</u>&nbsp;Carolus Kalbfleisch, Leipzig &amp; Berlin 1912-.</li>
	<li><u>PJena = Jenaer Papyrus-Urkunden,</u>&nbsp;ed. F. Zucker &amp; F. Schneider, Jena 1926.</li>
	<li><u>PKaran.</u>&nbsp;= E. J. Goodspeed,&nbsp;<u>Papyri from Karanis (Univ. of Chicago: Studies in Classical Philology,</u>&nbsp;vol. iii), Chicago 1902.</li>
	<li><u>PKlein.Form. = Stud.Pal.</u>&nbsp;(q.v.) iii, viii.</li>
	<li><u>PLeid.</u>&nbsp;= C. Leemans,&nbsp;<u>Papyri Graeci musei antiquarii publici Lugdu- ni-Batavi,</u>&nbsp;tom. i Leiden 1843; tom. ii 1885.</li>
	<li><u>PLeid.U. = Somnium Nectanebi,</u>&nbsp;ed. B. Lavagnini,&nbsp;<u>Eroticorum Graecorum Fragmenta Papyracea,</u>&nbsp;Leipzig (T.) 1922, p. 37: =&nbsp;<u>UPZ</u>&nbsp;81.</li>
	<li><u>PLeid.V.,</u>&nbsp;v.&nbsp;<u>PMag.Leid.V. ,, W.,</u>&nbsp;v. ,, ,,&nbsp;<u>W.</u></li>
	<li><u>PLeid.X.</u>&nbsp;= chemical papyrus in&nbsp;<u>PLeid.</u>&nbsp;(q.v.) vol. ii: reprinted in M. Berthelot,&nbsp;<u>Arch&eacute;ologie et Histoire des Sciences</u>&nbsp;(Paris 1906), pp. 269-306 ( =&nbsp;<u>Comptes rendus des s&eacute;ances de l' Acad. des Sciences,</u>&nbsp;tom. xlix): cited by Berthelot's sections.</li>
	<li><u>PLille = Institut papyrologique de l' universit&eacute; de Lille: Papyrus grecs</u>&nbsp;publi&eacute;s sous la direction de Pierre Jouguet . . , Paris 1907-28.</li>
	<li><u>PLips.</u>&nbsp;= L. Mitteis,&nbsp;<u>Griechische Urkunden der Papyrussammlung zu Leipzig.</u>&nbsp;vol. i, 1906.</li>
	<li><u>PLit.Lond.</u>&nbsp;= H. J. M. Milne,&nbsp;<u>Catalogue of the Literary Papyri in the British Museum,</u>London 1927.</li>
	<li><u>PLond. = Greek papyri in the British Museum,</u>&nbsp;vols. i and ii ed. F. G. Kenyon, vol. iii ed. F. G. Kenyon &amp; H. I. Bell, vols. iv and v ed. H. I. Bell, London 1893-; unpublished papyri (<u>PLond. ined.</u>) are cited by inventory No.</li>
	<li><u>PLond.</u>&nbsp;1821, ed. H. I. Bell &amp; W. E. Crum,&nbsp;<u>Aegyptus</u>&nbsp;vi (1925) pp. 177-226.</li>
	<li><u>PLond.</u>1912-29 = H. I. Bell,&nbsp;<u>Jews and Christians in Egypt,</u>&nbsp;London 1924.</li>
	<li><u>PMag. = Papyri Graecae Magicae,</u>&nbsp;herausgegeben und &uuml;bersetzt von K. Preisendanz, 2 vols., Leipzig &amp; Berlin 1928, 1931.</li>
	<li><u>PMag.Berol.</u>&nbsp;= G. Parthey,&nbsp;<u>Zwei griechische Zauberpapyri des Ber- liner Museums, Abh. Berl. Akad.</u>&nbsp;1865 pp. 109-80; cf. W. Kroll,&nbsp;<u>Philol.</u>&nbsp;liv (1895) p. 564 ( =&nbsp;<u>PMag.</u>&nbsp;1, 2).</li>
	<li><u>PMag.Leid.V. = Papyrus magica musei Lugdunensis Batavi,</u>&nbsp;ed. A. Dieterich,&nbsp;<u>Jahrb. f. kl. Phil.,</u>&nbsp;Suppl. xvi (1888) pp. 793-818; cited by column and line ( =&nbsp;<u>PMag.</u>&nbsp;12).</li>
	<li><u>PMag.Leid.W.</u>&nbsp;= Leiden magical papyrus&nbsp;<u>W.,</u>&nbsp;ed. A. Dieterich,&nbsp;<u>Abraxas (Festschrift . . Hermann Usener</u>&nbsp;. . Bonn), Leipzig 1891; cited by page and line of the papyrus, as in Leemans' edition ( =&nbsp;<u>PMag.</u>&nbsp;13, cited by column and line).</li>
	<li><u>PMag.Lond. = PLond.</u>1.46, 121, etc.</li>
	<li><u>PMag.Par.</u>1, 2 = C. Wessely,&nbsp;<u>Wiener Denkschr.</u>&nbsp;xxxvi (2) (1888) pp. 44-126, pp. 139-148; partly in A. Dieterich,&nbsp;<u>Eine Mithras- liturgie,</u>&nbsp;Leipzig 1903, pp. 1 ff., and A. Deissmann,&nbsp;<u>Light from the Ancient East,</u>&nbsp;London 1919, pp. 258 ff. ( =&nbsp;<u>PMag.</u>4, 3).</li>
	<li><u>PMag.Rain.</u>&nbsp;= C. Wessely,&nbsp;<u>Wiener Denkschr.</u>&nbsp;xlii (2) (1893) p. 65.</li>
	<li><u>PMagd. = Papyrus de Magdola,</u>&nbsp;r&eacute;&eacute;d . . . par Jean Lesquier, Paris 1912 (<u>PLille</u>&nbsp;II 2-4); republished in&nbsp;<u>PEnteux.</u></li>
	<li><u>PMasp.</u>&nbsp;= Jean Masp&eacute;ro,&nbsp;<u>Papyrus grecs d' &eacute;poque byzantine,</u>&nbsp;in&nbsp;<u>Cata- logue g&eacute;n&eacute;ral des antiquit&eacute;s &eacute;gyptiennes du Mus&eacute;e du Caire,</u>&nbsp;I (Nos. 67001-67124) 1911, II (Nos. 67125-67278) 1913, III (Nos. 67279- 67359) 1916. Digits indicating 67(000) omitted in refs., thus: 2 = 67002.</li>
	<li><u>PMed.Lond. = London Medical Papyrus,</u>&nbsp;No. 155, ed. C. Kalbfleisch in&nbsp;<u>Papyri graecae Musei Britannici et Musei Berolinensis,</u>&nbsp;Rostock 1902.</li>
	<li><u>PMed.Strassb. = Papyri Argentoratenses Graecae,</u>&nbsp;ed. C. Kalbfleisch,&nbsp;<u>Index lectionum in Academia Rostochiensi</u>&nbsp;1901.</li>
	<li><u>PMerton</u>&nbsp;= H. Idris Bell &amp; C. H. Roberts,&nbsp;<u>Catalogue of the Greek papyri in the collection of Wilfred Merton,</u>&nbsp;London, vol. i 1939.</li>
	<li><u>PMeyer</u>&nbsp;= P. M. Meyer,&nbsp;<u>Griechische Texte aus Agypten:</u>&nbsp;1.&nbsp;<u>Papyri des neutestamentlichen Seminars der Universit&auml;t Berlin;</u>&nbsp;2.&nbsp;<u>Ostraka der Sammlung Deissmann,</u>&nbsp;Berlin (Leipzig) 1916.</li>
	<li><u>PMich. = University of Michigan papyri,</u>&nbsp;published in&nbsp;<u>Trans. Am. Ph. Ass.</u>&nbsp;liii (1922) p. 134.</li>
	<li><u>PMich.</u>iii =&nbsp;<u>Michigan Papyri</u>&nbsp;vol. iii: Miscellaneous Papyri, edited by J. G. Winter ( = University of Michigan Studies, Humanistic Series, vol. xl), Ann Arbor 1936.</li>
	<li><u>PMich.Teb. = Michigan Papyri</u>&nbsp;vol. ii: Papyri from Tebtunis, in two volumes, Part I, ed. A. E. R. Boak ( = University of Michigan Studies, Humanistic Series, vol. xxviii), Ann Arbor 1933.</li>
	<li><u>PMich.Zen. = Zenon papyri in the University of Michigan collection,</u>&nbsp;ed. C. C. Edgar ( = University of Michigan Studies, Humanistic Series, vol. xxiv), Ann Arbor 1931.</li>
	<li><u>PMilan. = Papiri Milanesi,</u>&nbsp;ed. A. Calderini (Pubbl. di 'Aegyptus', S. Scient., vol. i), Parte i, Collezione Jacovelli-Vita, Milano, Universit&agrave; Cattolica del Sacro Cuore, 1928.</li>
	<li><u>PMilan.R.Univ. = PUniv.Milan.</u>&nbsp;(q.v.).</li>
	<li><u>PMilan.</u>17 = Commentario ad Antimaco da Colofone, ed. A. Vogliano,&nbsp;<u>PUniv.Milan.</u>&nbsp;i. 17.</li>
	<li><u>PMonac.</u>&nbsp;= A. Heisenberg &amp; L. Wenger,&nbsp;<u>Byzantinische Papyri (Ver&ouml;ffentlichungen aus der Papyrus-Sammlung der K. Hof- und Staatsbibliothek zu M&uuml;nchen</u>&nbsp;I), Leipzig 1914.</li>
	<li><u>POsl. = Papyri Osloenses,</u>&nbsp;ed. S. Eitrem, Oslo 1925-.</li>
	<li><u>POxy. = Oxyrhynchus Papyri,</u>&nbsp;ed. B. P. Grenfell &amp; A. S. Hunt, London 1898-.</li>
	<li><u>PPar.</u>&nbsp;= W. Brunet de Presle,&nbsp;<u>Notices et extraits des papyrus grecs du mus&eacute;e du Louvre et de la biblioth&egrave;que imp&eacute;riale</u>&nbsp;xviii (2), Paris 1865.</li>
	<li><u>PPar.Wess.</u>&nbsp;= C. Wessely,&nbsp;<u>Die Pariser Papyri des Fundes von El Faij&ucirc;m (Wiener Denkschr.</u>&nbsp;xxxvii (2) (1889) pp. 97 ff.).</li>
	<li><u>PPetr. = The Flinders Petrie Papyri</u>&nbsp;. . , Pt. 1, ed. J. P. Mahaffy (Royal Irish Academy, Cunningham Memoirs, No. 8); Pt. 2, ed. J. P. Mahaffy (ibid., No. 9); Pt. 3, ed. J. P. Mahaffy &amp; J. G. Smyly (ibid., No. 11), Dublin 1891-1905.</li>
	<li><u>PPrincet. = Papyri in the Princeton University Collections,</u>&nbsp;vol. I ed. A. C. Johnson and H. B. van Hoesen ( = Johns Hopkins Univer- sity Studies in Archaeology No. 10), Baltimore 1931; vol. II ed. E. H. Kase ( = Princeton University Studies in Papyrology No. 1), Princeton 1936.</li>
	<li><u>PRain. (NS) = Mitteilungen aus der Papyrussammlung der National- bibliothek in Wien (Papyrus Erzherzog Rainer).</u>&nbsp;Neue Serie I i (1932), ed. H. Gerstinger; I ii (1939), ed. H. Oellacher; cf.&nbsp;<u>CPR.</u></li>
	<li><u>PRein. = Papyrus grecs et d&eacute;motiques</u>&nbsp;. . , ed. Th&eacute;odore Reinach, Paris 1905.</li>
	<li><u>PRev.Laws</u>&nbsp;= B. P. Grenfell,&nbsp;<u>Revenue Laws of Ptolemy Philadelphus,</u>&nbsp;Oxford 1896.</li>
	<li><u>PRoss.-Georg. = Papyri Russischer und Georgischer Sammlungen,</u>&nbsp;herausgegeben von Gregor Zereteli, bearbeitet von G Zereteli, O. Kr&uuml;ger, P. Jernstedt, Tiflis 1925-35.</li>
	<li><u>PRyl. = Catalogue of the Greek papyri in the John Rylands Library at Manchester,</u>&nbsp;vol. i 1911, ed. A. S. Hunt; vol. ii 1915, ed. A. S. Hunt, J. de M. Johnson, V. Martin; vol. iii 1938, ed. C. H. Roberts.</li>
	<li><u>PSI = Papiri greci e latini (Pubblicazioni della Societ&agrave; italiana per la ricerca dei papiri greci e latini in Egitto),</u>&nbsp;Firenze 1912-; cited by No. of vol., papyrus, and line.</li>
	<li><u>PSorb.</u>&nbsp;(i.e. Papyri in the Sorbonne), v.&nbsp;<u>PGand.</u></li>
	<li><u>PStrassb.</u>&nbsp;= F. Preisigke,&nbsp;<u>Griechische Papyrus der kaiserlichen Uni- versit&auml;ts- und Landesbibliothek zu Strassburg,</u>&nbsp;2 vols., Strassburg (afterwards Leipzig) 1906-20.</li>
	<li><u>PTaur.</u>&nbsp;= V. A. Peyron,&nbsp;<u>Papyri graeci regii Taurinensis musei Aegyptii,</u>&nbsp;Turin 1826-7.</li>
	<li><u>PTeb. = Tebtunis Papyri,</u>&nbsp;ed. B. P. Grenfell, A. S. Hunt, J. G. Smyly, E. J. Goodspeed, London &amp; New York, vol. i 1902, vol. ii 1907, vol. iii pt. i 1933, pt. 2 (ed. A. S. Hunt, J. G. Smyly, C. C. Edgar; London &amp; Univ. of California Press) 1938.</li>
	<li><u>PThead. = Papyrus de Th&eacute;adelphie,</u>&nbsp;&eacute;d. par Pierre Jouguet, Paris 1911.</li>
	<li><u>PTheb.Bank</u>&nbsp;= U. Wilcken,&nbsp;<u>Aktenst&uuml;cke aus der Kgl. Bank zu Theben (Abh. Berl. Akad.</u>1886).</li>
	<li><u>PUniv.Giss.</u>&nbsp;= H. Kling and others,&nbsp;<u>Mitteilungen aus der Papyrus- sammlung der Giessener Universit&auml;tsbibliothek,</u>&nbsp;1924-.</li>
	<li><u>PUniv.Milan.</u>&nbsp;= A. Vogliano,&nbsp;<u>Papiri della R. Universit&agrave; di Milano,</u>&nbsp;vol. i, Milan 1937.</li>
	<li><u>PVarsov.</u>&nbsp;= G. Manteuffel,&nbsp;<u>Papyri Varsovienses,</u>&nbsp;Warsaw 1935.</li>
	<li><u>PVat.</u>&nbsp;11 =&nbsp;<u>Il Papiro Vaticano Greco</u>(1. Φαβωρίνου περὶ φυγῆς; 2. <u>Registri Fondiari della Marmarica</u>), ed. M. Norsa &amp; G. Vitelli, Citt&agrave; del Vaticano, Biblioteca Apostolica Vaticana 1931. (<u>Studi e Testi</u>&nbsp;53.)</li>
	<li><u>PWarren = The Warren Papyri,</u>&nbsp;ed. A. S. Hunt, cited from&nbsp;<u>Studi in onore di S. Riccobono</u>ii, Palermo 1932, pp. 521-5, and&nbsp;<u>Aegyptus</u>&nbsp;xiii (1933) pp. 241-6.</li>
	<li><u>PW&uuml;rzb. = Mitteilungen aus der W&uuml;rzburger Papyrussammlung,</u>&nbsp;von Ulrich Wilcken (<u>Abhandlungen der Preussischen Akademie der Wissenschaften,</u>&nbsp;1933, Phil.-hist. Klasse No. 6), Berlin 1934.</li>
	<li><u>PZen.Col. = Zenon papyri: business papers of the 3rd century B.C.,</u>&nbsp;ed. W. L. Westermann and E. S. Hasenoehrl, New York, vol. i (<u>Columbia Papyri, Greek Series,</u>&nbsp;vol. iii) 1934.</li>
	<li><u>Raccolta Lumbroso = Raccolta di Scritti in onore di G. Lumbroso,</u>&nbsp;Milan 1925.</li>
	<li><u>Sammelb. = Sammelbuch griechischer Urkunden aus Agypten</u>&nbsp;(both inscriptions and papyri), Bde. i, ii ed. F. Preisigke, Strassburg (later Berlin &amp; Leipzig) 1913-22; Bd. iii (6001-7269) ed. F. Bilabel, Berlin &amp; Leipzig 1926-7; Bd. iv (7270-7514), Bd. v Heft 1 (7515-7654) ed. F. Bilabel, Heidelberg 1931, 1934.</li>
	<li><u>Stud.Pal.</u>&nbsp;= C. Wessely,&nbsp;<u>Studien zur Pal&auml;ographie und Papyrus- kunde,</u>&nbsp;Leipzig 1901-.</li>
	<li><u>Studi Riccobono,</u>&nbsp;v.&nbsp;<u>PWarren.</u></li>
	<li><u>Theb.Ostr. = Theban Ostraca</u>&nbsp;. . Pt. iii:&nbsp;<u>Greek texts,</u>&nbsp;by J. G. Milne, Toronto (Oxford) 1913.</li>
	<li>Thunell&nbsp;<u>Sitologenpapyri</u>&nbsp;= K.Thunell,&nbsp;<u>Sitologen-Papyri aus d. Berliner Museum,</u>&nbsp;Uppsala 1924; republished in&nbsp;<u>P Berl. Leihg.</u></li>
	<li><u>UPZ</u>&nbsp;= U. Wilcken,&nbsp;<u>Urkunden der Ptolem&auml;erzeit</u>:&nbsp;<strong>I.</strong>&nbsp;<u>Papyri aus Unter&auml;gypten,</u>&nbsp;Berlin &amp; Leipzig 1922;&nbsp;<strong>II.</strong>&nbsp;<u>Papyri aus Ober&auml;gypten,</u>&nbsp;1935-.</li>
	<li>Wilcken&nbsp;<u>Chr.,</u>&nbsp;v. Mitteis&nbsp;<u>Chr.</u></li>
	</ul>
    <p className="float-right">
	CLARENDON PRESS, OXFORD. June, 1940.
    </p>


  </div>
);

export default PapyPub;
