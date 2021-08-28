import {
  Spacer,
  HStack,
  Link,
  Image,
  chakra
} from "@chakra-ui/react";

export default function Nefino() {

  return (


    <HStack spacing="3" pr="4" fontSize="15" border="solid 1px red">
      <Link p="2.5" ml="6">
        <Image
          width="153px"
          height="40px"
          //src="https://www.nefino.de/wp-content/uploads/2021/02/Nefino_logo.png"
          src="https://www.nefino.de/wp-content/uploads/2021/02/Nefino_white.svg"
        />
      </Link>
      <Spacer />
      <Link p="2">Home</Link>
      <Link ml="1" p="2">
        Aktuelles
      </Link>
      <Link ml="1" p="2">
        Leistungen
      </Link>
      <Link ml="1" p="2">
        Kontakt
      </Link>
      <Link ml="1" p="2">
        Karriere
      </Link>
      <Link ml="1" p="2">
        <Image
          width="20px"
          height="12px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABLElEQVR4AY2QgUZEQRSGz9ydmzbYkBWABBJYABHEFhJ6m0WP0DMEQNIr9AKrN8ne2Tt3Zs7MOdOZmRBEv+v34Tvub9R6fdNlAzU+snSME/wdjbjbbJ6EiEg6BA8102QbjKNpoMzw8v6qD/sOALbbT2MC1NgaAWOKOgxf5czY+4dbAX2G/THzcozLrvPV85IQyqVz0rvg2p9Pei4HjzSsiFbV4JgyhhxCjpGdZ0RhdikLB9/b8Qig7MkpSovR7Cp59q6CazaNFiTt4J82o6uvdMVwTsztKTXZod4jgOJJuqNAjFyGrBR8gM6XwKfIC4KanBSTZ0rClKh08D9DFh3egW7ebH7NcRDQWrz9rM2Ne+mDOXB2mZJ8agL19nwxR2iZXGm1gDbQKhDjd4yHb2oW/KR8xHicAAAAAElFTkSuQmCC"
        />
      </Link>
      <Link ml="1" p="2">
        <Image
          width="20px"
          height="12px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII="
        />
      </Link>
    </HStack>






  );
}
