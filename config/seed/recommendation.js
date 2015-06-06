'use strict';

module.exports = function (models) {
    return models.recommendation.bulkCreate([{
        id: 1,
        title: 'First Friday',
        description: 'First Friday is a free self-guided tour of downtown’s cutting edge cultural hot spots.',
        url: 'http://www.godowntownraleigh.com/first-friday-raleigh',
        source: 'feed/reddit/TheCrash84',
        address: '1-800 Go fuck yourself',
        city: 'Raleigh',
        state: 'NC',
        phone_number: '1-800-dan-sucks',
        type_id: 3,
        verified: false
    },
    {
        id: 2,
        title: 'The Silk Stocking Sirens Presents: Burlesque',
        description: 'We are at it again! Put on your flapper dresses and zoot suits and join us for a roaring Burlesque show at Common 414, Raleigh\'s only 1920\'s themed bar. June 5th. $14 Cover. Show starts at 9pm',
        url: 'https://www.facebook.com/events/1662002650694837/',
        source: 'feed/reddit/TheCrash84',
        address: '1-800 Go fuck yourself',
        city: 'Raleigh',
        state: 'NC',
        phone_number: '1-800-dan-sucks',
        type_id: 4,
        start: '2015-06-05T20:24:34.000Z',
        end: '2015-06-05T23:24:34.000Z',
        verified: false
    },
    {
        id: 3,
        title: 'PBaRt Show & circusSPARK Fundraiser',
        description: 'The 6th annual PBaRt Show is unique warehouse district street party with art, music, and circus performers. The event is free and open to the public. All proceeds benefit circusSPARK, SPARKcon 2015! and visual art exchange.',
        url: 'https://www.facebook.com/events/1662002650694837/',
        source: 'feed/reddit/TheCrash84',
        address: '1-800 Go fuck yourself',
        city: 'Raleigh',
        state: 'NC',
        phone_number: '1-800-dan-sucks',
        type_id: 4,
        start: '2015-06-05T18:00:00.000Z',
        end: '2015-06-06T23:00:00.000Z',
        verified: false
    },
    {
        id: 4,
        title: 'Dazed and Confused (1993)',
        description: 'Written and directed by Richard Linklater. Jason London, Wiley Wiggins, Matthew McConaughey. (102 min.) R',
        url: 'http://ncartmuseum.org/calendar/event/2015/06/05/dazed_and_confused_1993/2100',
        source: 'feed/reddit/TheCrash84',
        address: '1-800 Go fuck yourself',
        city: 'Raleigh',
        state: 'NC',
        phone_number: '1-800-dan-sucks',
        type_id: 4,
        start: '2015-06-05T21:00:00.000Z',
        verified: false
    },
    {
        id: 5,
        title: 'BioBlitz',
        description: 'A BioBlitz is an epic nature scavenger hunt! Expert naturalists will find as many plant and animal species as possible in less than 24 hours!  This festival is a great way to combine research, education and celebration! Learn about the biodiversity of our environment, become a scientist, track a box turtle in the woods, make environmental crafts, and more!',
        url: 'http://www.piedmontwildlifecenter.org/bioblitz2015/',
        source: 'feed/reddit/TheCrash84',
        address: '1-800 Go fuck yourself',
        city: 'Raleigh',
        state: 'NC',
        type_id: 3,
        start: '2015-06-05T19:00:00.000Z',
        end: '2015-06-06T16:00:00.000Z',
        verified: false
    },
    {
        id: 6,
        title: 'Dierks Bentley',
        description: 'Dierks Bentley performs live at Walnut Creek Amphitheatre as part of the Country Megaticket 2015 with special guests Kip Moore, Maddie & Tae and Canaan Smith.',
        url: 'http://www.visitraleigh.com/includes/calendar-of-events/Dierks-Bentley/31674/',
        source: 'feed/reddit/TheCrash84',
        address: '1-800 Go fuck yourself',
        city: 'Raleigh',
        state: 'NC',
        phone_number: '1-800-dan-sucks',
        type_id: 5,
        start: '2015-06-05T19:00:00.000Z',
        end: '2015-06-05T23:00:00.000Z',
        verified: false
    },
    {
        id: 7,
        title: 'Fridays on the Front Porch',
        description: 'Join us at Fridays on the Front Porch (FOFP) a popular end-of-the-work-week celebration in Chapel Hill, NC.  Mel Melton will be performing tonight, and new this season are a variety of food trucks available to entertain your palate. Relax on our shady front porch while enjoying delicious fare provided by your favorite food trucks Bam Pow Chow and Baguettaboutit. No cover charge or reservations required.',
        url: 'http://www.visitchapelhill.org/plan-a-visit/event/fridays-on-the-front-porch7',
        source: 'feed/reddit/TheCrash84',
        address: '211 Pittsboro Street ',
        city: 'Chapel Hill',
        state: 'NC',
        phone_number: '(919) 933-2001',
        type_id: 5,
        start: '2015-06-05T17:00:00.000Z',
        end: '2015-06-05T20:00:00.000Z',
        verified: false
    }]);
};
