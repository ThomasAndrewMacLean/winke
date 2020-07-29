export const add = (a, b) => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? '' : '';

export const getImageUrl = (context, id, full) => {
  if (!context.find((p) => p.id == id)) return '';
  return full
    ? context.find((p) => p.id == id).pic[0].url
    : context.find((p) => p.id == id).pic[0].thumbnails.large.url;
};

export const getBomen = (context) => {
  return context
    .find((p) => p.id == 'bomen')

    .pic.filter((x) => x.thumbnails)
    .map((x) => {
      return { small: x.thumbnails.large.url, large: x.url, name: x.filename };
    });
};

export const getBushranger = (context) => {
  return context
    .find((p) => p.id == 'bushranger')
    .pic.filter((x) => x.thumbnails)
    .map((x) => {
      return { small: x.thumbnails.large.url, large: x.url, name: x.filename };
    });
};

export const getMouflon = (context) => {
  return context
    .find((p) => p.id == 'mouflon')
    .pic.filter((x) => x.thumbnails)
    .map((x) => {
      return { small: x.thumbnails.large.url, large: x.url, name: x.filename };
    });
};

export const getTermietenberg = (context) => {
  return context
    .find((p) => p.id == 'termite mountain')
    .pic.filter((x) => x.thumbnails)
    .map((x) => {
      return { small: x.thumbnails.large.url, large: x.url, name: x.filename };
    });
};

export const getImageName = (context, id) => {
  return (
    context.find((p) => p.id == id) && context.find((p) => p.id == id).name
  );
};
export const getImageDescriptions = (context, id) => {
  return (
    context.find((p) => p.id == id) &&
    context.find((p) => p.id == id).description
  );
};

export const getDataFromAirtable = async () => {
  const url =
    'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
  const dataFromAirtableJson = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ airtableApp: process.env.AIRTABLE_APP }),
  });
  const dataFromAirtable = await dataFromAirtableJson.json();

  return {
    ...dataFromAirtable,
  };
};
