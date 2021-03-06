import React from 'react';
import Container from 'react-bootstrap/Container';

class CrosswordsApp extends React.Component {
    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <h3 className="text-warning" style={{ paddingTop: '100px' }}>Crossword Puzzles</h3>
                    <h6 className="text-white" style={{ margin: '10px', marginTop: '20px' }}>
                        Test your knowledge of each section title's content with these crosswords!
                        Note: Clicking on the link below will redirect you to another site. I am
                        currently working on embedding these crosswords into my website, but for now,
                        here is where you can access them. Also, please be aware that there are
                        hyphens in between multi-word responses. Enjoy!
                    </h6>
                    <br />
                    <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-genealogy-of-jesus-the-messiah">Chapter 1: The Genealogy of Jesus the Messiah</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/joseph-accepts-jesus-as-his-son">Chapter 1: Joseph Accepts Jesus as His Son</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-magi-visit-the-messiah">Chapter 2: The Magi Visit the Messiah</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-escape-to-egypt">Chapter 2: The Escape to Egypt</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-return-to-nazareth">Chapter 2: The Return to Nazareth</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/john-the-baptist-prepares-the-way">Chapter 3: John the Baptist Prepares the Way</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-baptism-of-jesus-4">Chapter 3: The Baptism of Jesus</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-is-tested-in-the-wilderness-2">Chapter 4: Jesus is Tested in the Wilderness</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-begins-to-preach">Chapter 4: Jesus Begins to Preach</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-calls-his-first-disciples">Chapter 4: Jesus Calls His First Disciples</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-heals-the-sick">Chapter 4: Jesus Heals the Sick</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/introduction-to-the-sermon-on-the-mount">Chapter 5: Introduction to the Sermon on the Mount</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-beatitudes-37">Chapter 5: The Beatitudes</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/salt-and-light-2">Chapter 5: Salt and Light</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-fulfillment-of-the-law">Chapter 5: The Fulfillment of the Law</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/murder-155">Chapter 5: Murder</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/adultery">Chapter 5: Adultery</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/divorce-19">Chapter 5: Divorce</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/oaths">Chapter 5: Oaths</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/eye-for-eye">Chapter 5: Eye for Eye</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/love-for-enemies">Chapter 5: Love for Enemies</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/giving-to-the-needy">Chapter 6: Giving to the Needy</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/prayer-133">Chapter 6: Prayer</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/fasting-20">Chapter 6: Fasting</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/treasures-in-heaven-3">Chapter 6: Treasures in Heaven</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/do-not-worry-2">Chapter 6: Do Not Worry</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/judging-others">Chapter 7: Juding Others</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/ask-seek-knock">Chapter 7: Ask, Seen, Knock</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-narrow-and-wide-gates">Chapter 7: The Narrow and Wide Gates</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/true-and-false-prophets">Chapter 7: True and False Prophets</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/true-and-false-disciples">Chapter 7: True and False Disciples</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-wise-and-foolish-builders-2">Chapter 7: The Wise and Foolish Builders</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-heals-a-man-with-leprosy-2">Chapter 8: Jesus Heals a Man With Leprosy</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-faith-of-the-centurion">Chapter 8: The Faith of the Centurion</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-heals-many-2">Chapter 8: Jesus Heals Many</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-cost-of-following-jesus">Chapter 8: The Cost of Following Jesus</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-calms-the-storm-4">Chapter 8: Jesus Calms the Storm</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-restores-two-demon-possessed-men">Chapter 8: Jesus Restores Two Demon-Possessed Men</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/john-the-baptist-beheaded">Chapter 14: John the Baptist Beheaded</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-feeds-the-five-thousand-5">Chapter 14: Jesus Feeds the Five Thousand</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-walks-on-the-water-2">Chapter 14: Jesus Walks on the Water</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/that-which-defiles">Chapter 15: That Which Defiles</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-faith-of-a-canaanite-woman">Chapter 15: The Faith of a Canaanite Woman</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-feeds-the-four-thousand">Chapter 15: Jesus Feeds the Four Thousand</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/judas-hangs-himself">Chapter 27: Judas Hangs Himself</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-before-pilate">Chapter 27: Jesus Before Pilate</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-soldiers-mock-jesus">Chapter 27: The Soldiers Mock Jesus</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-crucifixion-of-jesus">Chapter 27: The Crucifixion of Jesus</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-death-of-jesus-2">Chapter 27: The Death of Jesus</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-burial-of-jesus">Chapter 27: The Burial of Jesus</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-guard-at-the-tomb">Chapter 27: The Guard at the Tomb</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/jesus-has-risen-2">Chapter 28: Jesus Has Risen</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-guards-report">Chapter 28: The Guards' Report</a></li>
                        <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white' }} href="https://crosswordlabs.com/embed/the-great-commission-6">Chapter 28: The Great Commission</a></li>
                    </ul>
                    <h4 className="text-white">Don't worry! Other chapters are coming!</h4>
                </Container>
            </div>
        )
    }
}

export default CrosswordsApp;