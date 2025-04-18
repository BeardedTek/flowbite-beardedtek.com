/*
This grabs a querystring named topic and puts it in the subject of an email via the web form.

It goes through a few checks prior to inserting it.
    - Filters out bad words
    - Truncates to a maximum of 30 characters

TODO: Optionally check for allowed topics.
*/

window.addEventListener('DOMContentLoaded', async function () {
  const FilterModule = await import('bad-words');
  const voca = await import('voca');
  const Filter = FilterModule.Filter;

  if (typeof Filter !== 'function') {
    console.error("bad-words: named export 'Filter' is not a constructor:", FilterModule);
    return;
  }

  const filter = new Filter();

  const subjectEl = document.querySelector("form[name='contact'] input[name='subject']");
  if (!subjectEl) return;

  const topicParam = new URLSearchParams(window.location.search).get('topic') || 'none';
  if (topicParam === 'none') return;

  // Clean and truncate
  const cleanedTopic = filter.clean(topicParam).substring(0, 30);

  // Title case the cleaned topic
  const titledTopic = voca.default.titleCase(cleanedTopic);

  const currentSubject = subjectEl.value || 'none';
  subjectEl.value = currentSubject.concat(" - ", titledTopic);
});