import React from 'react';
import styles from './ListOfAbbreviations.module.css';

const ListOfAbbreviations = () => (
  <div className={`${styles.listContainer}`}>
    <h6>
		Henry George Liddell and Robert Scott
    </h6>
    <h5 className="pt-3">
    	Lists of Abbreviations
    </h5>

    <p>
	The lists which follow are designed to make it easy for the reader to trace the quotations given
	in the Lexicon. The general list of abbreviations (V) gives references, where needed, to one or other
	of the lists (I-IV) in which the expansion will be found; but the abbreviated names of authors have not
	 been inserted in List V unless their alphabetical position in List I is different from that of the full
	  name (e.g. A. = Aeschylus). List V also contains the expansion of all abbreviations used without
	  explanation in List I. The names of authors are in general printed in roman type, the titles of their
	  works (given in alphabetical order under the author's name) in italics, which are also used for the
	   titles of collections and periodical publications.
    </p>

    <p>
	The list of authors (I) is not intended to furnish a bibliography of Greek Literature, but to indicate
	the editions which have been followed in respect of the form of reference, i.e. pagination, numeration
	of books, chapters, sections, lines, fragments, &c.; where the form adopted in the Lexicon differs from
	that of the edition cited (e.g. where the pagination of an earlier editor is used, but may be found in the
	 margin of a later edition) the fact is stated. It will be understood that the reading adopted in the edition
	  cited is not necessarily given (or referred to) in the Lexicon. For the convenience of readers a few editions
	  of the fragments of individual authors have been named in the list, even when the remains of the author have
	  been cited from the sources of the quotations. Where no abbreviation follows the author's name the full name
	  is used in the Lexicon, and where no date is given it is to be understood that evidence to determine it is
	   lacking. No attempt has in general been made to indicate which of the works attributed to an author are to
	   be regarded as spurious.
    </p>

    <p>
	In the description of the editions used ' OCT' is added to show that the work is one of the Oxford Classical Texts
      {' '}
      <u>
		(Scriptorum Classicorum Bibliotheca Oxoniensis)
      </u>
      ; similarly 'T.' indicates the smaller Teubner Series
      {' '}
      <u>
		(Bibliotheca Scriptorum Graecorum et Romanorum Teubneriana)
      </u>
      , ' D.' the Didot editions, and 'Loeb' the Loeb Classical Library.
    </p>


    <p className="float-right">
	CLARENDON PRESS, OXFORD. June, 1940.
    </p>


  </div>
);

export default ListOfAbbreviations;
