"""Pydantic models for SearchSaga content — mirrors @searchsaga/types."""

from enum import Enum
from pydantic import BaseModel, Field


class Stage(str, Enum):
    THE_ITCH = "the-itch"
    THE_MUTATION = "the-mutation"
    THE_DNA = "the-dna"
    THE_BIRTH = "the-birth"
    THE_GROWTH_SPURT = "the-growth-spurt"
    THE_TERRITORIAL_FIGHT = "the-territorial-fight"
    THE_OFFSPRING = "the-offspring"


class CardType(str, Enum):
    MOMENT = "moment"
    SURPRISE = "surprise"
    VISUAL = "visual"
    STAGE_MARKER = "stage_marker"
    CONNECTION = "connection"
    INTERACTION = "interaction"
    BREATHING = "breathing"


class ConnectionType(str, Enum):
    COUSIN = "cousin"
    OFFSPRING = "offspring"
    DNA_SOURCE = "dna_source"
    INSPIRED_BY = "inspired_by"


class ContentStatus(str, Enum):
    DRAFT = "draft"
    REVIEW = "review"
    SAFETY_FLAGGED = "safety-flagged"
    PUBLISHED = "published"


class Domain(str, Enum):
    SCIENCE = "science"
    TECHNOLOGY = "technology"
    NATURE = "nature"
    MATH = "math"
    HUMAN_SYSTEMS = "human-systems"
    ART = "art"


class StageContent(BaseModel):
    stage: Stage
    title: str
    text: str


class Card(BaseModel):
    type: CardType
    text: str | None = None
    stage: Stage | None = None
    question: str | None = None
    answer_card_index: int | None = None


class Connection(BaseModel):
    from_topic: str
    to_topic: str
    type: ConnectionType
    hook: str
    strength: int = Field(ge=1, le=5, default=3)
    cross_domain: bool = False


class SafetyReport(BaseModel):
    word_shield_passed: bool = False
    word_shield_flags: list[str] = []
    context_shield_passed: bool = False
    context_shield_flags: list[str] = []


class TopicNode(BaseModel):
    title: str
    domain: Domain
    subtitle: str
    stages: list[StageContent]
    cards: list[Card]
    connections: list[Connection] = []
    unconnected_dots: list[str] = []
    status: ContentStatus = ContentStatus.DRAFT
    safety_report: SafetyReport | None = None
    confidence: float | None = None
