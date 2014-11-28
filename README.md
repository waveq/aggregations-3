# Agregacje 3

![Data Wranglers](images/data-wrangler.jpg)

Kilka przykładowych agregacji korzystających z danych
[zipcodes](http://media.mongodb.org/zips.json) oraz
[imieniny](data/wbzyl/imieniny.csv) opisano w [Aggregation Pipeline Examples](Aggregations_in_JS.md).

### Poprawka, *deadline*, 2014-11-27, 08:00 CEST

**[16.11.2014]** 12.11. pojawiła się wersja [2.8.0-rc0](http://docs.mongodb.org/manual/release-notes/2.8/).
Dlatego do tabelek w zadaniach 1a, 1c, 2 dodać wiersze dla tej (lub późniejszej) wersji MongoDB.
W wynikach uwzględnić *storageEngines*
[MMAP](http://docs.mongodb.org/manual/faq/storage/)
([Understanding MongoDB Storage](http://www.polyspot.com/en/blog/2012/understanding-mongodb-storage/))
i [WiredTiger](http://www.wiredtiger.com/).

Należy przygotować rozwiązania [zadań 1 i 2](http://wbzyl.inf.ug.edu.pl/nosql/zadania).

Dane należy wpisać według schematu (całość w jednym wierszu):

    1. [Nazwisko, Imię](link do **prywatnego** repo z rozwiązaniem zadania 1 na GitHub).
       [Tytuł](link do **prywatnego** repo z rozwiązaniem zadania 2 na GitHub)

1. [Banecki, Daniel](https://bitbucket.org/Harpie/nosql)
1. [Bławat, Adam](https://github.com/ablawat/technologie-nosql/blob/master/zadanie-1.md)
1. [Komorowski, Szymon](https://github.com/szykom/nosql)
1. [Nowicki, Jakub](https://github.com/jnowicki/NoSQL-JN)

### Niezaliczone laboratorium

1. Banecka, Kamila
1. Bieliński, Marcin
1. Gałka, Łukasz
1. Grycko, Marcin
1. Janowski, Arkadiusz
1. Kamiński, Jakub
1. Kłeczek, Piotr
1. Koźmiński, Marcin
1. Makulec, Krzysztof
1. Sałata, Jakub
1. Soliński, Damian
1. Szklarska, Milena
1. Szymanek, Tomasz
1. Zdunek, Kamil


### Egzamin, *deadline* czwartek, 2015-01-08, 08:00 CEST

Należy przygotować rozwiązanie [Zadania 3](http://wbzyl.inf.ug.edu.pl/nosql/zadania)
(można użyć innych danych i napisać swoje map-reduce).

Zamiast bazy MongoDB, można przygotować przykłady lub wtyczki lub agregacje
dla bazy [Elasticsearch](http://www.elasticsearch.org/overview/).
Na początek należy się przyjrzeć narzędziu
[Kibana](http://www.elasticsearch.org/overview/kibana), następnie poczytać
o [wtyczkach](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/modules-plugins.html)
a na koniec o [agregacjach](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations.html).

**Uwaga:* Większe zadania, można przygotować w zespole 2–3 osobowym.

1. Acewicz-Hepfner, Patryk
1. Banecka, Kamila
1. Banecki, Daniel
1. Bednarczyk, Marek
1. Bieliński, Marcin
1. Bławat, Adam
1. Bonczkowska, Magdalena
1. Borkowski, Maciej
1. Cimoch, Jarosław
1. Czechowicz, Kacper
1. Dargacz, Mateusz
1. Drozdowski, Adrian
1. Ekiert, Łukasz
1. Gałka, Łukasz
1. Grycko, Marcin
1. Horoszko, Marcin
1. Janowski, Arkadiusz
1. Józwiak, Roman
1. Kamiński, Jakub
1. Karolczak, Jakub
1. Kąkol, Jan
1. Kłeczek, Piotr
1. Komorowski, Szymon
1. Koźmiński, Marcin
1. Kożuch, Adam
1. Kucharski, Maciej
1. Kulas, Piotr
1. Kuźnik, Mateusz
1. Kwiatkowski, Dominik
1. Lamkiewicz, Krzysztof
1. Latoszewski, Adam
1. Latoszewski, Krzysztof
1. Ławicki, Patryk
1. Makulec, Krzysztof
1. Miotk, Mateusz
1. Miś, Maciej
1. Nowak, Wojciech
1. Nowicki, Jakub
1. Ossowski, Marcin
1. Piotrkowski, Łukasz
1. Rękawek, Szymon
1. Sałata, Jakub
1. Sarzyńska, Magdalena
1. Sienkiewicz, Daniel
1. Skałkowski, Michał
1. Soliński, Damian
1. Synowczyk, Piotr
1. Szklarska, Milena
1. Szymanek, Tomasz
1. Wittbrodt, Łukasz
1. Zakrzewski, Patryk
1. Zalewski, Marcin
1. Zdunek, Kamil


## Simple Rules for Reproducible Computations

Provide public access to scripts, runs, and results:

1. Version control all custom scripts:
  - avoid writing code
  - **write thin scripts** and use standard tools and use standard UNIX
    commands to chain things together.
1. Avoid manual data manipulation steps:
  - use a build system, for example [**make**](http://bost.ocks.org/mike/make/),
    and have all results produced automatically by build targets
  - if it’s not automated, it’s not part of the project,
    i.e. have an idea for a graph or an analysis?
    automate its generation
1. Use a markup, for example
   [**Markdown**](http://daringfireball.net/projects/markdown/syntax),
   to create reports for analysis and presentation output products.

And two more rules:

1. Record all intermediate results, when possible in standardized formats.
1. Connect textual statements to underlying results.


## Różne rzeczy

1. Do automatycznego wygenerowania spisu treści w zadaniach można użyć narzędzia
[Table of Contents Preprocessor](https://github.com/aslushnikov/table-of-contents-preprocessor).
1. Scott Chacon, Ben Straub. [Pro Git](http://git-scm.com/book/en/v2)
  - [6.2 GitHub – Contributing to a Project](http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project)


## Big Collections

1. [Stanford Large Network Dataset Collection](https://snap.stanford.edu/data/)
by Jure Leskovec: Online Reviews (Amazon, Movies, Beer)
1. [GetGlue and Timestamped Event Data](http://getglue-data.s3.amazonaws.com/getglue_sample.tar.gz)
(ok. 11 GB); próbka 100 jsonów [getglue101](/data/wbzyl/getglue101.json).
Dane pochodzą z lat 2007–2012 – tylko filmy i przedstawienia TV.
Przykładowe aggregacje: ilu jest różnych użytkowników
w danych? jakie jest 10 najpopularniejszych filmów i przedstawień TV?
ile jest różnych akcji?
1. [GeoNames](http://www.geonames.org/export/) i [Postal Codes](http://www.geonames.org/postal-codes/).
