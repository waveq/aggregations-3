# Agregacje 2

![Data Wranglers](images/data-wrangler.jpg)

Kilka przykładowych agregacji korzystających z danych
[zipcodes](http://media.mongodb.org/zips.json) oraz
[imieniny](data/wbzyl/imieniny.csv) opisano w [Aggregation Framework Examples](Aggregations_in_JS.md).

### Zaliczenie, *deadline* czwartek, 2014-11-20, 08:00 CEST

Dane należy wpisać według schematu (całość w jednym wierszu):

    1. [Nazwisko, Imię](link do repozytorium z rozwiązaniem zadania 1 na GitHub).
       [Tytuł](link do repozytorium z rozwiązaniem zadania 2 na GitHub),

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
1. Józwiak, Roman
1. Karolczak, Jakub
1. Kąkol, Jan
1. Kłeczek, Piotr
1. Komorowski, Szymon
1. Koźmiński, Marcin
1. Kucharski, Maciej
1. Kulas, Piotr
1. Kulesz, Michał
1. Kuźnik, Mateusz
1. Kwiatkowski, Dominik
1. Lamkiewicz, Krzysztof
1. Latoszewski, Adam
1. Latoszewski, Krzysztof
1. Ławicki, Patryk
1. Miotk, Mateusz
1. Miś, Maciej
1. Nowak, Wojciech
1. Ossowski, Marcin
1. Piotrkowski, Łukasz
1. [Rękawek, Szymon](https://github.com/waveq/nosqlUG/blob/master/Zad1.md). [GetGlue](https://github.com/waveq/nosqlUG/blob/master/Zad2.md)
1. Sałata, Jakub
1. Sarzyńska, Magdalena
1. Sienkiewicz, Daniel
1. Skałkowski, Michał
1. Soliński, Damian
1. Sosnowski, Ariel
1. Synowczyk, Piotr
1. Szklarska, Milena
1. Szymanek, Tomasz
1. Wittbrodt, Łukasz
1. Zakrzewski, Patryk
1. Zalewski, Marcin
1. Zdunek, Kamil


### Egzamin, *deadline* czwartek, 2015-01-08, 08:00 CEST

**TODO**


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
1. Jak sobie radzić z [nieczystymi committami](Git_Pull_Requests.md)?


## Big Collections

1. [Stanford Large Network Dataset Collection](https://snap.stanford.edu/data/)
by Jure Leskovec: Online Reviews (Amazon, Movies, Beer)
1. [GetGlue and Timestamped Event Data](http://getglue-data.s3.amazonaws.com/getglue_sample.tar.gz)
(ok. 11 GB); próbka 100 jsonów [getglue101](/data/wbzyl/getglue101.json).
Dane pochodzą z lat 2007–2012 – tylko filmy i przedstawienia TV.
Przykładowe aggregacje: ilu jest różnych użytkowników
w danych? jakie jest 10 najpopularniejszych filmów i przedstawień TV?
ile jest różnych akcji?
