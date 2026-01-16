---
title: the newest york
subtitle: the freshest apple, baby
---

so theres york, right? and theres new york. but there's a lot of other places called york.

i wanna know which york is truly the newest york. lets go in order of oldest york to newest york.

# list of yorks

---

**1. York** - UK, North Yorkshire

naturally the og is the oldest york. its **the** york, its really old.

founded in 71AD

theres 141,686 people livin there

[yorkie bars](https://en.wikipedia.org/wiki/Yorkie_(chocolate_bar)) were invented here


---

**2. York** - US, Pennsylvania

this was the first US capital or whatever. the articles of federation were adopted at this particular york.

they had the first thanksgiving here in 1777.

44,800 people live(d) here (2021 census)

---

**3. New York** - US, New York
[40.7127281,-74.0060152](https://www.google.com/maps/@40.7127281,-74.0060152)

ah the big appl

1624

Population: 8,804,190 (2020)

---

**4. York** - US, Maine
[43.1439384,-70.6505274](https://www.google.com/maps/@43.1439384,-70.6505274)

named York in 1652

Population: 13,723

---

**5. York** - US, South Carolina
[34.9940654,-81.2421403](https://www.google.com/maps/@34.9940654,-81.2421403)

1785

Population: 7,736

---

**6. New York** - UK, Tyne and Wear
[55.0252998,-1.4869496](https://www.google.com/maps/@55.0252998,-1.4869496)

Named in 1777

Population: its only included in the Tyne and Wear census (im not sure this one even counts)

---

**7. New York** - UK, Lincolnshire
[53.0784049,-0.1396847](https://www.google.com/maps/@53.0784049,-0.1396847)

1800s

Population: <150 (2001)

named for York, not after New York - despite being Newer! sometimes called the little apple.

---

**8. York** - US, Ohio
[41.3592194,-82.892134](https://www.google.com/maps/@41.3592194,-82.892134)

1818

Population: 6852

---

**9. York** - US, Illinois
[39.1714288,-87.6391922](https://www.google.com/maps/@39.1714288,-87.6391922)

1834ish

Population: dunno but the whole township or whatever only has 509. so less than that.

---

**10. York** - Australia, Western Australia
[-31.8889034,116.7691483](https://www.google.com/maps/@-31.8889034,116.7691483)

1835

Population: 2,399 (2021)

---

**11. York** - US, Alabama
[32.4862491,-88.2964183](https://www.google.com/maps/@32.4862491,-88.2964183)

1838

Population: 2538 (2010)

---

**12. York** - US, Minnesota
[43.532601,-92.2690996](https://www.google.com/maps/@43.532601,-92.2690996)

1858

Population: 409

---

**13. York** - US, Nebraska
[40.8680593,-97.5919166](https://www.google.com/maps/@40.8680593,-97.5919166)

1869

Population: 7,766 (2010)

uhhh theres a big [womens prison](https://en.wikipedia.org/wiki/Nebraska_Correctional_Center_for_Women)? i mean a large building with women prisoners, not a prison for large women.

---

**14. York** - US, North Dakota
[48.312777,-99.573468](https://www.google.com/maps/@48.312777,-99.573468)

1886

Population: 17 (2020)

its a "rural city" (with 17 people living there cmon). theres nothing here except for a forensics lab maybe?

---

# The newest york is......

**15. York** - Canada, Prince Edward Island
[46.3160182,-63.0972127](https://www.google.com/maps/@46.3160182,-63.0972127)

1986

Population: 387

---

# bonus yorks

**York** - Sierra Leone, Western Area
[8.2857441,-13.1788684](https://www.google.com/maps/@8.2857441,-13.1788684)

don't know when this one was named

Population: dunno, couldn't find a census or anything

---

**York** - Sierra Leone, Western Area (yes theres another one)
[7.5426439,-12.4625014](https://www.google.com/maps/@7.5426439,-12.4625014)

named in 1819

Population: still don't know

# methodology

i just found all of the yorks and then looked at when they were named that :)

## finding the yorks
* write some [overpass ql](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) (see below) to find places with a given name in the world using [overpass-turbo](https://overpass-turbo.eu/).
* export the json results
* write some python (that I then lost) to map those to a nicer format
* manually check each york for founding/naming dates
* sort that list
* boom
* new york

### overpass query
here it is:
```
[out:json];
(
  node["place"~"city|town|village"]["name"~"^(York|New York)$"];
  way["place"~"city|town|village"]["name"~"^(York|New York)$"];
  relation["place"~"city|town|village"]["name"~"^(York|New York)$"];
);
out center;
```