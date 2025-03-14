import { Injectable } from '@angular/core';
import  {Event}  from  '../event.modal'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  private events: Event[] = [
    {
      id: 1,
      title: 'Angular Conference',
      date: '2025-04-15',
      location: 'New York, NY',
      description: 'A conference for Angular developers.'
    },
    {
      id: 2,
      title: 'React Summit',
      date: '2025-05-20',
      location: 'San Francisco, CA',
      description: 'A summit for React developers.'
    },
    {
      id: 3,
      title: 'Vue.js Global',
      date: '2025-06-10',
      location: 'London, UK',
      description: 'An international conference for Vue.js enthusiasts.'
    },
    {
      id: 4,
      title: 'JS Nation',
      date: '2025-07-05',
      location: 'Amsterdam, Netherlands',
      description: 'A global JavaScript event for developers and engineers.'
    },
    {
      id: 5,
      title: 'Node.js Interactive',
      date: '2025-08-12',
      location: 'Berlin, Germany',
      description: 'A deep dive into Node.js development and best practices.'
    },
    {
      id: 6,
      title: 'Web Dev Summit',
      date: '2025-09-18',
      location: 'Toronto, Canada',
      description: 'A summit covering modern web development trends.'
    },
    {
      id: 7,
      title: 'TypeScript Conf',
      date: '2025-10-25',
      location: 'Austin, TX',
      description: 'A dedicated conference for TypeScript developers.'
    },
    {
      id: 8,
      title: 'Python AI Summit',
      date: '2025-11-14',
      location: 'Boston, MA',
      description: 'Exploring AI and ML advancements in Python.'
    },
    {
      id: 9,
      title: 'Frontend United',
      date: '2025-12-03',
      location: 'Brussels, Belgium',
      description: 'An event focused on frontend technologies and UX.'
    },
    {
      id: 10,
      title: 'GraphQL Summit',
      date: '2026-01-22',
      location: 'Seattle, WA',
      description: 'A conference dedicated to GraphQL developers.'
    },
    {
      id: 11,
      title: 'DevOps Days',
      date: '2026-02-15',
      location: 'Chicago, IL',
      description: 'A conference covering DevOps best practices and tooling.'
    },
    {
      id: 12,
      title: 'Full Stack Europe',
      date: '2026-03-08',
      location: 'Antwerp, Belgium',
      description: 'A full-stack developer conference in Europe.'
    },
    {
      id: 13,
      title: 'Cybersecurity World',
      date: '2026-04-19',
      location: 'Dubai, UAE',
      description: 'An event for cybersecurity professionals and developers.'
    },
    {
      id: 14,
      title: 'Google Cloud Next',
      date: '2026-05-27',
      location: 'Mountain View, CA',
      description: 'Google’s cloud technology and innovations conference.'
    },
    {
      id: 15,
      title: 'AWS re:Invent',
      date: '2026-06-14',
      location: 'Las Vegas, NV',
      description: 'Amazon’s annual cloud computing conference.'
    },
    {
      id: 16,
      title: 'Kubernetes Con',
      date: '2026-07-09',
      location: 'Stockholm, Sweden',
      description: 'A global conference on Kubernetes and containerization.'
    },
    {
      id: 17,
      title: 'AI & ML Expo',
      date: '2026-08-21',
      location: 'Singapore',
      description: 'A major expo focused on artificial intelligence and ML.'
    },
    {
      id: 18,
      title: 'Blockchain Summit',
      date: '2026-09-30',
      location: 'Zurich, Switzerland',
      description: 'A blockchain and crypto-focused event.'
    },
    {
      id: 19,
      title: 'DjangoCon',
      date: '2026-10-18',
      location: 'Sydney, Australia',
      description: 'A conference for Django and Python developers.'
    },
    {
      id: 20,
      title: 'Next.js Conf',
      date: '2026-11-12',
      location: 'Los Angeles, CA',
      description: 'A Next.js and modern web development event.'
    },
    {
      id: 21,
      title: 'Svelte Summit',
      date: '2026-12-05',
      location: 'Oslo, Norway',
      description: 'A conference dedicated to Svelte and SvelteKit.'
    },
    {
      id: 22,
      title: 'RustConf',
      date: '2027-01-15',
      location: 'Portland, OR',
      description: 'A gathering for Rust developers and enthusiasts.'
    },
    {
      id: 23,
      title: 'Jamstack Conf',
      date: '2027-02-20',
      location: 'San Diego, CA',
      description: 'A summit exploring Jamstack architecture and best practices.'
    },
    {
      id: 24,
      title: 'Flutter Engage',
      date: '2027-03-14',
      location: 'Berlin, Germany',
      description: 'An event focused on Flutter and Dart development.'
    },
    {
      id: 25,
      title: 'GoLangCon',
      date: '2027-04-22',
      location: 'Dublin, Ireland',
      description: 'A conference for Golang developers and backend engineers.'
    },
    {
      id: 26,
      title: 'PHP World',
      date: '2027-05-30',
      location: 'Orlando, FL',
      description: 'A global event for PHP and Laravel developers.'
    },
    {
      id: 27,
      title: 'AI Ethics & Tech',
      date: '2027-06-18',
      location: 'New York, NY',
      description: 'A conference discussing AI, machine learning, and ethical concerns.'
    },
    {
      id: 28,
      title: 'Progressive Web Apps Summit',
      date: '2027-07-08',
      location: 'Paris, France',
      description: 'A deep dive into building powerful PWAs.'
    },
    {
      id: 29,
      title: 'Tech Leadership Conference',
      date: '2027-08-25',
      location: 'London, UK',
      description: 'An event for tech leads, managers, and CTOs.'
    },
    {
      id: 30,
      title: 'Metaverse & XR DevCon',
      date: '2027-09-12',
      location: 'Tokyo, Japan',
      description: 'Exploring the future of metaverse, AR, and VR development.'
    }
  
  ];

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  getEvent(id: number): Observable<Event | undefined> {
    return of(this.events.find(event => event.id === id));
  }

  addEvent(event: Event): void {
    this.events.push(event);
  }

  updateEvent(event: Event): void {
    const index = this.events.findIndex(e => e.id === event.id);
    if (index !== -1) {
      this.events[index] = event;
    }
  }

  deleteEvent(id: number): void {
    this.events = this.events.filter(event => event.id !== id);
  }
}
